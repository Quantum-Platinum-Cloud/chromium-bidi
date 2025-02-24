# Copyright 2023 Google LLC.
# Copyright (c) Microsoft Corporation.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import base64
from pathlib import Path

import pytest
from anys import ANY_STR
from test_helpers import (assert_images_equal, execute_command, get_tree,
                          goto_url, read_JSON_message, send_JSON_command)


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "png_filename", [
        "gradient_with_alpha_channel.png",
        "gradient_without_alpha_channel.png",
    ],
    ids=["gradient with alpha channel", "gradient without alpha channel"])
async def test_screenshot(websocket, context_id, png_filename,
                          get_cdp_session_id):
    with open(Path(__file__).parent.resolve() / png_filename,
              'rb') as image_file:
        png_base64 = base64.b64encode(image_file.read()).decode('utf-8')

        await goto_url(websocket, context_id,
                       f'data:image/png;base64,{png_base64}')
        session_id = await get_cdp_session_id(context_id)

        # Set a fixed viewport to make the test deterministic.
        await execute_command(
            websocket, {
                "method": "cdp.sendCommand",
                "params": {
                    "method": "Emulation.setDeviceMetricsOverride",
                    "params": {
                        "width": 200,
                        "height": 200,
                        "deviceScaleFactor": 1.0,
                        "mobile": False,
                    },
                    "session": session_id
                }
            })

        await send_JSON_command(
            websocket, {
                "method": "browsingContext.captureScreenshot",
                "params": {
                    "context": context_id
                }
            })

        resp = await read_JSON_message(websocket)
        assert resp["result"] == {'data': ANY_STR}

        assert_images_equal(resp["result"]["data"], png_base64)


@pytest.mark.asyncio
@pytest.mark.skip(reason="TODO: fails on CI")
async def test_screenshot_oopif(websocket, context_id, html, iframe,
                                get_cdp_session_id):
    await goto_url(websocket,
                   context_id,
                   html(iframe("https://www.example.com")),
                   wait="complete")

    iframe_context_id = (await get_tree(
        websocket, context_id))["contexts"][0]["children"][0]["context"]
    assert iframe_context_id != context_id

    session_id = await get_cdp_session_id(context_id)

    # Set a fixed viewport to make the test deterministic.
    await execute_command(
        websocket, {
            "method": "cdp.sendCommand",
            "params": {
                "method": "Emulation.setDeviceMetricsOverride",
                "params": {
                    "width": 200,
                    "height": 200,
                    "deviceScaleFactor": 1.0,
                    "mobile": False,
                },
                "session": session_id
            }
        })

    await send_JSON_command(
        websocket, {
            "method": "browsingContext.captureScreenshot",
            "params": {
                "context": iframe_context_id
            }
        })

    resp = await read_JSON_message(websocket)
    assert resp["result"] == {'data': ANY_STR}

    png_filename = "oopif.png"
    with open(Path(__file__).parent.resolve() / png_filename,
              'rb') as image_file:
        png_base64 = base64.b64encode(image_file.read()).decode('utf-8')

        assert_images_equal(resp["result"]["data"], png_base64)
