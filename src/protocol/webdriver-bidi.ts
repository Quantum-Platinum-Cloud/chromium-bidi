/**
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * THIS FILE IS AUTOGENERATED. Run `npm run bidi-types` to regenerate.
 * @see https://github.com/w3c/webdriver-bidi/blob/master/index.bs
 */
export type Command = {
  id: JsUint;
} & CommandData &
  Extensible;
export type CommandData =
  | BrowserCommand
  | BrowsingContextCommand
  | InputCommand
  | NetworkCommand
  | ScriptCommand
  | SessionCommand;
export type EmptyParams = Extensible;
export type Message = CommandResponse | ErrorResponse | Event;
export type CommandResponse = {
  type: 'success';
  id: JsUint;
  result: ResultData;
} & Extensible;
export type ErrorResponse = {
  type: 'error';
  id: JsUint | null;
  error: ErrorCode;
  message: string;
  stacktrace?: string;
} & Extensible;
export type ResultData =
  | BrowsingContextResult
  | EmptyResult
  | NetworkResult
  | ScriptResult
  | SessionResult;
export type EmptyResult = Extensible;
export type Event = {
  type: 'event';
} & EventData &
  Extensible;
export type EventData =
  | BrowsingContextEvent
  | LogEvent
  | NetworkEvent
  | ScriptEvent;
export type Extensible = {
  [key: string]: any;
};

/**
 * Must be between `-9007199254740991` and `9007199254740991`, inclusive.
 */
export type JsInt = number;

/**
 * Must be between `0` and `9007199254740991`, inclusive.
 */
export type JsUint = number;
export const enum ErrorCode {
  InvalidArgument = 'invalid argument',
  InvalidSessionId = 'invalid session id',
  MoveTargetOutOfBounds = 'move target out of bounds',
  NoSuchAlert = 'no such alert',
  NoSuchElement = 'no such element',
  NoSuchFrame = 'no such frame',
  NoSuchHandle = 'no such handle',
  NoSuchNode = 'no such node',
  NoSuchScript = 'no such script',
  SessionNotCreated = 'session not created',
  UnableToCaptureScreen = 'unable to capture screen',
  UnableToCloseBrowser = 'unable to close browser',
  UnknownCommand = 'unknown command',
  UnknownError = 'unknown error',
  UnsupportedOperation = 'unsupported operation',
}
export type SessionCommand =
  | Session.End
  | Session.New
  | Session.Status
  | Session.Subscribe
  | Session.Unsubscribe;
export type SessionResult = Session.NewResult | Session.StatusResult;
export namespace Session {
  export type CapabilitiesRequest = {
    alwaysMatch?: Session.CapabilityRequest;
    firstMatch?: [...Session.CapabilityRequest[]];
  };
}
export namespace Session {
  export type CapabilityRequest = {
    acceptInsecureCerts?: boolean;
    browserName?: string;
    browserVersion?: string;
    platformName?: string;
    proxy?: {
      proxyType?: 'pac' | 'direct' | 'autodetect' | 'system' | 'manual';
      proxyAutoconfigUrl?: string;
      ftpProxy?: string;
      httpProxy?: string;
      noProxy?: [...string[]];
      sslProxy?: string;
      socksProxy?: string;
      /**
       * Must be between `0` and `255`, inclusive.
       */
      socksVersion?: number;
    };
  } & Extensible;
}
export namespace Session {
  export type SubscriptionRequest = {
    events: [...string[]];
    contexts?: [...BrowsingContext.BrowsingContext[]];
  };
}
export namespace Session {
  export type Status = {
    method: 'session.status';
    params: EmptyParams;
  };
}
export namespace Session {
  export type StatusResult = {
    ready: boolean;
    message: string;
  };
}
export namespace Session {
  export type New = {
    method: 'session.new';
    params: Session.NewParameters;
  };
}
export namespace Session {
  export type NewParameters = {
    capabilities: Session.CapabilitiesRequest;
  };
}
export namespace Session {
  export type NewResult = {
    sessionId: string;
    capabilities: {
      acceptInsecureCerts: boolean;
      browserName: string;
      browserVersion: string;
      platformName: string;
      proxy: {
        proxyType?: 'pac' | 'direct' | 'autodetect' | 'system' | 'manual';
        proxyAutoconfigUrl?: string;
        ftpProxy?: string;
        httpProxy?: string;
        noProxy?: [...string[]];
        sslProxy?: string;
        socksProxy?: string;
        /**
         * Must be between `0` and `255`, inclusive.
         */
        socksVersion?: number;
      };
      setWindowRect: boolean;
    } & Extensible;
  };
}
export namespace Session {
  export type End = {
    method: 'session.end';
    params: EmptyParams;
  };
}
export namespace Session {
  export type Subscribe = {
    method: 'session.subscribe';
    params: Session.SubscriptionRequest;
  };
}
export namespace Session {
  export type Unsubscribe = {
    method: 'session.unsubscribe';
    params: Session.SubscriptionRequest;
  };
}
export type BrowserCommand = Browser.Close;
export namespace Browser {
  export type Close = {
    method: 'browser.close';
    params: EmptyParams;
  };
}
export type BrowsingContextCommand =
  | BrowsingContext.Activate
  | BrowsingContext.CaptureScreenshot
  | BrowsingContext.Close
  | BrowsingContext.Create
  | BrowsingContext.GetTree
  | BrowsingContext.HandleUserPrompt
  | BrowsingContext.Navigate
  | BrowsingContext.Print
  | BrowsingContext.Reload
  | BrowsingContext.SetViewport;
export type BrowsingContextResult =
  | BrowsingContext.CaptureScreenshotResult
  | BrowsingContext.CreateResult
  | BrowsingContext.GetTreeResult
  | BrowsingContext.NavigateResult
  | BrowsingContext.PrintResult;
export type BrowsingContextEvent =
  | BrowsingContext.ContextCreated
  | BrowsingContext.ContextDestroyed
  | BrowsingContext.NavigationStarted
  | BrowsingContext.FragmentNavigated
  | BrowsingContext.DomContentLoaded
  | BrowsingContext.Load
  | BrowsingContext.DownloadWillBegin
  | BrowsingContext.NavigationAborted
  | BrowsingContext.NavigationFailed
  | BrowsingContext.UserPromptClosed
  | BrowsingContext.UserPromptOpened;
export namespace BrowsingContext {
  export type BrowsingContext = string;
}
export namespace BrowsingContext {
  export type InfoList = [...BrowsingContext.Info[]];
}
export namespace BrowsingContext {
  export type Info = {
    context: BrowsingContext.BrowsingContext;
    url: string;
    children: BrowsingContext.InfoList | null;
    parent?: BrowsingContext.BrowsingContext | null;
  };
}
export namespace BrowsingContext {
  export type Navigation = string;
}
export namespace BrowsingContext {
  export type NavigationInfo = {
    context: BrowsingContext.BrowsingContext;
    navigation: BrowsingContext.Navigation | null;
    timestamp: JsUint;
    url: string;
  };
}
export namespace BrowsingContext {
  export const enum ReadinessState {
    None = 'none',
    Interactive = 'interactive',
    Complete = 'complete',
  }
}
export namespace BrowsingContext {
  export type Activate = {
    method: 'browsingContext.activate';
    params: BrowsingContext.ActivateParameters;
  };
}
export namespace BrowsingContext {
  export type ActivateParameters = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace BrowsingContext {
  export type CaptureScreenshot = {
    method: 'browsingContext.captureScreenshot';
    params: BrowsingContext.CaptureScreenshotParameters;
  };
}
export namespace BrowsingContext {
  export type CaptureScreenshotParameters = {
    context: BrowsingContext.BrowsingContext;
    clip?: BrowsingContext.ClipRectangle;
  };
}
export namespace BrowsingContext {
  export type ClipRectangle =
    | BrowsingContext.BoxClipRectangle
    | BrowsingContext.ElementClipRectangle;
}
export namespace BrowsingContext {
  export type ElementClipRectangle = {
    type: 'element';
    element: Script.SharedReference;
    scrollIntoView?: boolean;
  };
}
export namespace BrowsingContext {
  export type BoxClipRectangle = {
    type: 'viewport';
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
export namespace BrowsingContext {
  export type CaptureScreenshotResult = {
    data: string;
  };
}
export namespace BrowsingContext {
  export type Close = {
    method: 'browsingContext.close';
    params: BrowsingContext.CloseParameters;
  };
}
export namespace BrowsingContext {
  export type CloseParameters = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace BrowsingContext {
  export type Create = {
    method: 'browsingContext.create';
    params: BrowsingContext.CreateParameters;
  };
}
export namespace BrowsingContext {
  export const enum CreateType {
    Tab = 'tab',
    Window = 'window',
  }
}
export namespace BrowsingContext {
  export type CreateParameters = {
    type: BrowsingContext.CreateType;
    referenceContext?: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `false`
     */
    background?: boolean;
  };
}
export namespace BrowsingContext {
  export type CreateResult = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace BrowsingContext {
  export type GetTree = {
    method: 'browsingContext.getTree';
    params: BrowsingContext.GetTreeParameters;
  };
}
export namespace BrowsingContext {
  export type GetTreeParameters = {
    maxDepth?: JsUint;
    root?: BrowsingContext.BrowsingContext;
  };
}
export namespace BrowsingContext {
  export type GetTreeResult = {
    contexts: BrowsingContext.InfoList;
  };
}
export namespace BrowsingContext {
  export type HandleUserPrompt = {
    method: 'browsingContext.handleUserPrompt';
    params: BrowsingContext.HandleUserPromptParameters;
  };
}
export namespace BrowsingContext {
  export type HandleUserPromptParameters = {
    context: BrowsingContext.BrowsingContext;
    accept?: boolean;
    userText?: string;
  };
}
export namespace BrowsingContext {
  export type Navigate = {
    method: 'browsingContext.navigate';
    params: BrowsingContext.NavigateParameters;
  };
}
export namespace BrowsingContext {
  export type NavigateParameters = {
    context: BrowsingContext.BrowsingContext;
    url: string;
    wait?: BrowsingContext.ReadinessState;
  };
}
export namespace BrowsingContext {
  export type NavigateResult = {
    navigation: BrowsingContext.Navigation | null;
    url: string;
  };
}
export namespace BrowsingContext {
  export type Print = {
    method: 'browsingContext.print';
    params: BrowsingContext.PrintParameters;
  };
}
export namespace BrowsingContext {
  export type PrintParameters = {
    context: BrowsingContext.BrowsingContext;
    /**
     * @defaultValue `false`
     */
    background?: boolean;
    margin?: BrowsingContext.PrintMarginParameters;
    /**
     * @defaultValue `"portrait"`
     */
    orientation?: 'portrait' | 'landscape';
    page?: BrowsingContext.PrintPageParameters;
    pageRanges?: [...(JsUint | string)[]];
    /**
     * Must be between `0.1` and `2`, inclusive.
     *
     * @defaultValue `1`
     */
    scale?: number;
    /**
     * @defaultValue `true`
     */
    shrinkToFit?: boolean;
  };
}
export namespace BrowsingContext {
  export type PrintMarginParameters = {
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    bottom?: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    left?: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    right?: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `1`
     */
    top?: number;
  };
}
export namespace BrowsingContext {
  export type PrintPageParameters = {
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `27.94`
     */
    height?: number;
    /**
     * Must be greater than or equal to `0`.
     *
     * @defaultValue `21.59`
     */
    width?: number;
  };
}
export namespace BrowsingContext {
  export type PrintResult = {
    data: string;
  };
}
export namespace BrowsingContext {
  export type Reload = {
    method: 'browsingContext.reload';
    params: BrowsingContext.ReloadParameters;
  };
}
export namespace BrowsingContext {
  export type ReloadParameters = {
    context: BrowsingContext.BrowsingContext;
    ignoreCache?: boolean;
    wait?: BrowsingContext.ReadinessState;
  };
}
export namespace BrowsingContext {
  export type SetViewport = {
    method: 'browsingContext.setViewport';
    params: BrowsingContext.SetViewportParameters;
  };
}
export namespace BrowsingContext {
  export type SetViewportParameters = {
    context: BrowsingContext.BrowsingContext;
    viewport: BrowsingContext.Viewport | null;
  };
}
export namespace BrowsingContext {
  export type Viewport = {
    width: JsUint;
    height: JsUint;
  };
}
export namespace BrowsingContext {
  export type ContextCreated = {
    method: 'browsingContext.contextCreated';
    params: BrowsingContext.Info;
  };
}
export namespace BrowsingContext {
  export type ContextDestroyed = {
    method: 'browsingContext.contextDestroyed';
    params: BrowsingContext.Info;
  };
}
export namespace BrowsingContext {
  export type NavigationStarted = {
    method: 'browsingContext.navigationStarted';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type FragmentNavigated = {
    method: 'browsingContext.fragmentNavigated';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type DomContentLoaded = {
    method: 'browsingContext.domContentLoaded';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type Load = {
    method: 'browsingContext.load';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type DownloadWillBegin = {
    method: 'browsingContext.downloadWillBegin';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type NavigationAborted = {
    method: 'browsingContext.navigationAborted';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type NavigationFailed = {
    method: 'browsingContext.navigationFailed';
    params: BrowsingContext.NavigationInfo;
  };
}
export namespace BrowsingContext {
  export type UserPromptClosed = {
    method: 'browsingContext.userPromptClosed';
    params: BrowsingContext.UserPromptClosedParameters;
  };
}
export namespace BrowsingContext {
  export type UserPromptClosedParameters = {
    context: BrowsingContext.BrowsingContext;
    accepted: boolean;
    userText?: string;
  };
}
export namespace BrowsingContext {
  export type UserPromptOpened = {
    method: 'browsingContext.userPromptOpened';
    params: BrowsingContext.UserPromptOpenedParameters;
  };
}
export namespace BrowsingContext {
  export type UserPromptOpenedParameters = {
    context: BrowsingContext.BrowsingContext;
    type: 'alert' | 'confirm' | 'prompt' | 'beforeunload';
    message: string;
  };
}
export type NetworkCommand = Record<string, never>;
export type NetworkResult = Record<string, never>;
export type NetworkEvent =
  | Network.BeforeRequestSent
  | Network.FetchError
  | Network.ResponseStarted
  | Network.ResponseCompleted;
export namespace Network {
  export type BaseParameters = {
    context: BrowsingContext.BrowsingContext | null;
    navigation: BrowsingContext.Navigation | null;
    redirectCount: JsUint;
    request: Network.RequestData;
    timestamp: JsUint;
  };
}
export namespace Network {
  export type BytesValue = Network.StringValue | Network.Base64Value;
}
export namespace Network {
  export type StringValue = {
    type: 'string';
    value: string;
  };
}
export namespace Network {
  export type Base64Value = {
    type: 'base64';
    value: string;
  };
}
export namespace Network {
  export type Cookie = {
    name: string;
    value: Network.BytesValue;
    domain: string;
    path: string;
    expires?: JsUint;
    size: JsUint;
    httpOnly: boolean;
    secure: boolean;
    sameSite: 'strict' | 'lax' | 'none';
  };
}
export namespace Network {
  export type FetchTimingInfo = {
    timeOrigin: number;
    requestTime: number;
    redirectStart: number;
    redirectEnd: number;
    fetchStart: number;
    dnsStart: number;
    dnsEnd: number;
    connectStart: number;
    connectEnd: number;
    tlsStart: number;
    requestStart: number;
    responseStart: number;
    responseEnd: number;
  };
}
export namespace Network {
  export type Header = {
    name: string;
    value: Network.BytesValue;
  };
}
export namespace Network {
  export type Initiator = {
    type: 'parser' | 'script' | 'preflight' | 'other';
    columnNumber?: JsUint;
    lineNumber?: JsUint;
    stackTrace?: Script.StackTrace;
    request?: Network.Request;
  };
}
export namespace Network {
  export type Request = string;
}
export namespace Network {
  export type RequestData = {
    request: Network.Request;
    url: string;
    method: string;
    headers: [...Network.Header[]];
    cookies: [...Network.Cookie[]];
    headersSize: JsUint;
    bodySize: JsUint | null;
    timings: Network.FetchTimingInfo;
  };
}
export namespace Network {
  export type ResponseContent = {
    size: JsUint;
  };
}
export namespace Network {
  export type ResponseData = {
    url: string;
    protocol: string;
    status: JsUint;
    statusText: string;
    fromCache: boolean;
    headers: [...Network.Header[]];
    mimeType: string;
    bytesReceived: JsUint;
    headersSize: JsUint | null;
    bodySize: JsUint | null;
    content: Network.ResponseContent;
  };
}
export namespace Network {
  export type BeforeRequestSent = {
    method: 'network.beforeRequestSent';
    params: Network.BeforeRequestSentParameters;
  };
}
export namespace Network {
  export type BeforeRequestSentParameters = Network.BaseParameters & {
    initiator: Network.Initiator;
  };
}
export namespace Network {
  export type FetchError = {
    method: 'network.fetchError';
    params: Network.FetchErrorParameters;
  };
}
export namespace Network {
  export type FetchErrorParameters = Network.BaseParameters & {
    errorText: string;
  };
}
export namespace Network {
  export type ResponseCompleted = {
    method: 'network.responseCompleted';
    params: Network.ResponseCompletedParameters;
  };
}
export namespace Network {
  export type ResponseCompletedParameters = Network.BaseParameters & {
    response: Network.ResponseData;
  };
}
export namespace Network {
  export type ResponseStarted = {
    method: 'network.responseStarted';
    params: Network.ResponseStartedParameters;
  };
}
export namespace Network {
  export type ResponseStartedParameters = Network.BaseParameters & {
    response: Network.ResponseData;
  };
}
export type ScriptCommand =
  | Script.AddPreloadScriptCommand
  | Script.CallFunction
  | Script.Disown
  | Script.Evaluate
  | Script.GetRealms
  | Script.RemovePreloadScriptCommand;
export type ScriptResult =
  | Script.AddPreloadScriptResult
  | Script.EvaluateResult
  | Script.GetRealmsResult;
export type ScriptEvent =
  | Script.Message
  | Script.RealmCreated
  | Script.RealmDestroyed;
export namespace Script {
  export type Channel = string;
}
export namespace Script {
  export type ChannelValue = {
    type: 'channel';
    value: Script.ChannelProperties;
  };
}
export namespace Script {
  export type ChannelProperties = {
    channel: Script.Channel;
    serializationOptions?: Script.SerializationOptions;
    ownership?: Script.ResultOwnership;
  };
}
export namespace Script {
  export type EvaluateResult =
    | Script.EvaluateResultSuccess
    | Script.EvaluateResultException;
}
export namespace Script {
  export type EvaluateResultSuccess = {
    type: 'success';
    result: Script.RemoteValue;
    realm: Script.Realm;
  };
}
export namespace Script {
  export type EvaluateResultException = {
    type: 'exception';
    exceptionDetails: Script.ExceptionDetails;
    realm: Script.Realm;
  };
}
export namespace Script {
  export type ExceptionDetails = {
    columnNumber: JsUint;
    exception: Script.RemoteValue;
    lineNumber: JsUint;
    stackTrace: Script.StackTrace;
    text: string;
  };
}
export namespace Script {
  export type Handle = string;
}
export namespace Script {
  export type LocalValue =
    | Script.RemoteReference
    | Script.PrimitiveProtocolValue
    | Script.ChannelValue
    | Script.ArrayLocalValue
    | Script.DateLocalValue
    | Script.MapLocalValue
    | Script.ObjectLocalValue
    | Script.RegExpLocalValue
    | Script.SetLocalValue;
}
export namespace Script {
  export type ListLocalValue = [...Script.LocalValue[]];
}
export namespace Script {
  export type ArrayLocalValue = {
    type: 'array';
    value: Script.ListLocalValue;
  };
}
export namespace Script {
  export type DateLocalValue = {
    type: 'date';
    value: string;
  };
}
export namespace Script {
  export type MappingLocalValue = [
    ...[Script.LocalValue | string, Script.LocalValue][],
  ];
}
export namespace Script {
  export type MapLocalValue = {
    type: 'map';
    value: Script.MappingLocalValue;
  };
}
export namespace Script {
  export type ObjectLocalValue = {
    type: 'object';
    value: Script.MappingLocalValue;
  };
}
export namespace Script {
  export type RegExpValue = {
    pattern: string;
    flags?: string;
  };
}
export namespace Script {
  export type RegExpLocalValue = {
    type: 'regexp';
    value: Script.RegExpValue;
  };
}
export namespace Script {
  export type SetLocalValue = {
    type: 'set';
    value: Script.ListLocalValue;
  };
}
export namespace Script {
  export type PreloadScript = string;
}
export namespace Script {
  export type Realm = string;
}
export namespace Script {
  export type PrimitiveProtocolValue =
    | Script.UndefinedValue
    | Script.NullValue
    | Script.StringValue
    | Script.NumberValue
    | Script.BooleanValue
    | Script.BigIntValue;
}
export namespace Script {
  export type UndefinedValue = {
    type: 'undefined';
  };
}
export namespace Script {
  export type NullValue = {
    type: 'null';
  };
}
export namespace Script {
  export type StringValue = {
    type: 'string';
    value: string;
  };
}
export namespace Script {
  export type SpecialNumber = 'NaN' | '-0' | 'Infinity' | '-Infinity';
}
export namespace Script {
  export type NumberValue = {
    type: 'number';
    value: number | Script.SpecialNumber;
  };
}
export namespace Script {
  export type BooleanValue = {
    type: 'boolean';
    value: boolean;
  };
}
export namespace Script {
  export type BigIntValue = {
    type: 'bigint';
    value: string;
  };
}
export namespace Script {
  export type RealmInfo =
    | Script.WindowRealmInfo
    | Script.DedicatedWorkerRealmInfo
    | Script.SharedWorkerRealmInfo
    | Script.ServiceWorkerRealmInfo
    | Script.WorkerRealmInfo
    | Script.PaintWorkletRealmInfo
    | Script.AudioWorkletRealmInfo
    | Script.WorkletRealmInfo;
}
export namespace Script {
  export type BaseRealmInfo = {
    realm: Script.Realm;
    origin: string;
  };
}
export namespace Script {
  export type WindowRealmInfo = Script.BaseRealmInfo & {
    type: 'window';
    context: BrowsingContext.BrowsingContext;
    sandbox?: string;
  };
}
export namespace Script {
  export type DedicatedWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'dedicated-worker';
  };
}
export namespace Script {
  export type SharedWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'shared-worker';
  };
}
export namespace Script {
  export type ServiceWorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'service-worker';
  };
}
export namespace Script {
  export type WorkerRealmInfo = Script.BaseRealmInfo & {
    type: 'worker';
  };
}
export namespace Script {
  export type PaintWorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'paint-worklet';
  };
}
export namespace Script {
  export type AudioWorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'audio-worklet';
  };
}
export namespace Script {
  export type WorkletRealmInfo = Script.BaseRealmInfo & {
    type: 'worklet';
  };
}
export namespace Script {
  export type RealmType =
    | 'window'
    | 'dedicated-worker'
    | 'shared-worker'
    | 'service-worker'
    | 'worker'
    | 'paint-worklet'
    | 'audio-worklet'
    | 'worklet';
}
export namespace Script {
  export type RemoteReference =
    | Script.SharedReference
    | Script.RemoteObjectReference;
}
export namespace Script {
  export type SharedReference = {
    sharedId: Script.SharedId;
    handle?: Script.Handle;
  } & Extensible;
}
export namespace Script {
  export type RemoteObjectReference = {
    handle: Script.Handle;
    sharedId?: Script.SharedId;
  } & Extensible;
}
export namespace Script {
  export type RemoteValue =
    | Script.PrimitiveProtocolValue
    | Script.SymbolRemoteValue
    | Script.ArrayRemoteValue
    | Script.ObjectRemoteValue
    | Script.FunctionRemoteValue
    | Script.RegExpRemoteValue
    | Script.DateRemoteValue
    | Script.MapRemoteValue
    | Script.SetRemoteValue
    | Script.WeakMapRemoteValue
    | Script.WeakSetRemoteValue
    | Script.IteratorRemoteValue
    | Script.GeneratorRemoteValue
    | Script.ErrorRemoteValue
    | Script.ProxyRemoteValue
    | Script.PromiseRemoteValue
    | Script.TypedArrayRemoteValue
    | Script.ArrayBufferRemoteValue
    | Script.NodeListRemoteValue
    | Script.HtmlCollectionRemoteValue
    | Script.NodeRemoteValue
    | Script.WindowProxyRemoteValue;
}
export namespace Script {
  export type InternalId = JsUint;
}
export namespace Script {
  export type ListRemoteValue = [...Script.RemoteValue[]];
}
export namespace Script {
  export type MappingRemoteValue = [
    ...[Script.RemoteValue | string, Script.RemoteValue][],
  ];
}
export namespace Script {
  export type SymbolRemoteValue = {
    type: 'symbol';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ArrayRemoteValue = {
    type: 'array';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type ObjectRemoteValue = {
    type: 'object';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.MappingRemoteValue;
  };
}
export namespace Script {
  export type FunctionRemoteValue = {
    type: 'function';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type RegExpRemoteValue = {
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  } & Script.RegExpLocalValue;
}
export namespace Script {
  export type DateRemoteValue = {
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  } & Script.DateLocalValue;
}
export namespace Script {
  export type MapRemoteValue = {
    type: 'map';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.MappingRemoteValue;
  };
}
export namespace Script {
  export type SetRemoteValue = {
    type: 'set';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type WeakMapRemoteValue = {
    type: 'weakmap';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type WeakSetRemoteValue = {
    type: 'weakset';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type IteratorRemoteValue = {
    type: 'iterator';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type GeneratorRemoteValue = {
    type: 'generator';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ErrorRemoteValue = {
    type: 'error';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ProxyRemoteValue = {
    type: 'proxy';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type PromiseRemoteValue = {
    type: 'promise';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type TypedArrayRemoteValue = {
    type: 'typedarray';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type ArrayBufferRemoteValue = {
    type: 'arraybuffer';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type NodeListRemoteValue = {
    type: 'nodelist';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type HtmlCollectionRemoteValue = {
    type: 'htmlcollection';
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.ListRemoteValue;
  };
}
export namespace Script {
  export type NodeRemoteValue = {
    type: 'node';
    sharedId?: Script.SharedId;
    handle?: Script.Handle;
    internalId?: Script.InternalId;
    value?: Script.NodeProperties;
  };
}
export namespace Script {
  export type NodeProperties = {
    nodeType: JsUint;
    childNodeCount: JsUint;
    attributes?: {
      [key: string]: string;
    };
    children?: [...Script.NodeRemoteValue[]];
    localName?: string;
    mode?: 'open' | 'closed';
    namespaceURI?: string;
    nodeValue?: string;
    shadowRoot?: Script.NodeRemoteValue | null;
  };
}
export namespace Script {
  export type WindowProxyRemoteValue = {
    type: 'window';
    value: Script.WindowProxyProperties;
    handle?: Script.Handle;
    internalId?: Script.InternalId;
  };
}
export namespace Script {
  export type WindowProxyProperties = {
    context: BrowsingContext.BrowsingContext;
  };
}
export namespace Script {
  export const enum ResultOwnership {
    Root = 'root',
    None = 'none',
  }
}
export namespace Script {
  export type SerializationOptions = {
    /**
     * @defaultValue `0`
     */
    maxDomDepth?: JsUint | null;
    /**
     * @defaultValue `null`
     */
    maxObjectDepth?: JsUint | null;
    /**
     * @defaultValue `"none"`
     */
    includeShadowTree?: 'none' | 'open' | 'all';
  };
}
export namespace Script {
  export type SharedId = string;
}
export namespace Script {
  export type StackFrame = {
    columnNumber: JsUint;
    functionName: string;
    lineNumber: JsUint;
    url: string;
  };
}
export namespace Script {
  export type StackTrace = {
    callFrames: [...Script.StackFrame[]];
  };
}
export namespace Script {
  export type Source = {
    realm: Script.Realm;
    context?: BrowsingContext.BrowsingContext;
  };
}
export namespace Script {
  export type RealmTarget = {
    realm: Script.Realm;
  };
}
export namespace Script {
  export type ContextTarget = {
    context: BrowsingContext.BrowsingContext;
    sandbox?: string;
  };
}
export namespace Script {
  export type Target = Script.RealmTarget | Script.ContextTarget;
}
export namespace Script {
  export type AddPreloadScriptCommand = {
    method: 'script.addPreloadScript';
    params: Script.AddPreloadScriptParameters;
  };
}
export namespace Script {
  export type AddPreloadScriptParameters = {
    functionDeclaration: string;
    arguments?: [...Script.ChannelValue[]];
    sandbox?: string;
  };
}
export namespace Script {
  export type AddPreloadScriptResult = {
    script: Script.PreloadScript;
  };
}
export namespace Script {
  export type Disown = {
    method: 'script.disown';
    params: Script.DisownParameters;
  };
}
export namespace Script {
  export type DisownParameters = {
    handles: [...Script.Handle[]];
    target: Script.Target;
  };
}
export namespace Script {
  export type CallFunction = {
    method: 'script.callFunction';
    params: Script.CallFunctionParameters;
  };
}
export namespace Script {
  export type CallFunctionParameters = {
    functionDeclaration: string;
    awaitPromise: boolean;
    target: Script.Target;
    arguments?: [...Script.LocalValue[]];
    resultOwnership?: Script.ResultOwnership;
    serializationOptions?: Script.SerializationOptions;
    this?: Script.LocalValue;
    /**
     * @defaultValue `false`
     */
    userActivation?: boolean;
  };
}
export namespace Script {
  export type Evaluate = {
    method: 'script.evaluate';
    params: Script.EvaluateParameters;
  };
}
export namespace Script {
  export type EvaluateParameters = {
    expression: string;
    target: Script.Target;
    awaitPromise: boolean;
    resultOwnership?: Script.ResultOwnership;
    serializationOptions?: Script.SerializationOptions;
    /**
     * @defaultValue `false`
     */
    userActivation?: boolean;
  };
}
export namespace Script {
  export type GetRealms = {
    method: 'script.getRealms';
    params: Script.GetRealmsParameters;
  };
}
export namespace Script {
  export type GetRealmsParameters = {
    context?: BrowsingContext.BrowsingContext;
    type?: Script.RealmType;
  };
}
export namespace Script {
  export type GetRealmsResult = {
    realms: [...Script.RealmInfo[]];
  };
}
export namespace Script {
  export type RemovePreloadScriptCommand = {
    method: 'script.removePreloadScript';
    params: Script.RemovePreloadScriptParameters;
  };
}
export namespace Script {
  export type RemovePreloadScriptParameters = {
    script: Script.PreloadScript;
  };
}
export namespace Script {
  export type Message = {
    method: 'script.message';
    params: Script.MessageParameters;
  };
}
export namespace Script {
  export type MessageParameters = {
    channel: Script.Channel;
    data: Script.RemoteValue;
    source: Script.Source;
  };
}
export namespace Script {
  export type RealmCreated = {
    method: 'script.realmCreated';
    params: Script.RealmInfo;
  };
}
export namespace Script {
  export type RealmDestroyed = {
    method: 'script.realmDestroyed';
    params: Script.RealmDestroyedParameters;
  };
}
export namespace Script {
  export type RealmDestroyedParameters = {
    realm: Script.Realm;
  };
}
export type LogEvent = Log.EntryAdded;
export namespace Log {
  export const enum Level {
    Debug = 'debug',
    Info = 'info',
    Warn = 'warn',
    Error = 'error',
  }
}
export namespace Log {
  export type Entry =
    | Log.GenericLogEntry
    | Log.ConsoleLogEntry
    | Log.JavascriptLogEntry;
}
export namespace Log {
  export type BaseLogEntry = {
    level: Log.Level;
    source: Script.Source;
    text: string | null;
    timestamp: JsUint;
    stackTrace?: Script.StackTrace;
  };
}
export namespace Log {
  export type GenericLogEntry = Log.BaseLogEntry & {
    type: string;
  };
}
export namespace Log {
  export type ConsoleLogEntry = Log.BaseLogEntry & {
    type: 'console';
    method: string;
    args: [...Script.RemoteValue[]];
  };
}
export namespace Log {
  export type JavascriptLogEntry = Log.BaseLogEntry & {
    type: 'javascript';
  };
}
export namespace Log {
  export type EntryAdded = {
    method: 'log.entryAdded';
    params: Log.Entry;
  };
}
export type InputCommand = Input.PerformActions | Input.ReleaseActions;
export namespace Input {
  export type ElementOrigin = {
    type: 'element';
    element: Script.SharedReference;
  };
}
export namespace Input {
  export type PerformActions = {
    method: 'input.performActions';
    params: Input.PerformActionsParameters;
  };
}
export namespace Input {
  export type PerformActionsParameters = {
    context: BrowsingContext.BrowsingContext;
    actions: [...Input.SourceActions[]];
  };
}
export namespace Input {
  export type SourceActions =
    | Input.NoneSourceActions
    | Input.KeySourceActions
    | Input.PointerSourceActions
    | Input.WheelSourceActions;
}
export namespace Input {
  export type NoneSourceActions = {
    type: 'none';
    id: string;
    actions: [...Input.NoneSourceAction[]];
  };
}
export namespace Input {
  export type NoneSourceAction = Input.PauseAction;
}
export namespace Input {
  export type KeySourceActions = {
    type: 'key';
    id: string;
    actions: [...Input.KeySourceAction[]];
  };
}
export namespace Input {
  export type KeySourceAction =
    | Input.PauseAction
    | Input.KeyDownAction
    | Input.KeyUpAction;
}
export namespace Input {
  export type PointerSourceActions = {
    type: 'pointer';
    id: string;
    parameters?: Input.PointerParameters;
    actions: [...Input.PointerSourceAction[]];
  };
}
export namespace Input {
  export const enum PointerType {
    Mouse = 'mouse',
    Pen = 'pen',
    Touch = 'touch',
  }
}
export namespace Input {
  export type PointerParameters = {
    /**
     * @defaultValue `"mouse"`
     */
    pointerType?: Input.PointerType;
  };
}
export namespace Input {
  export type PointerSourceAction =
    | Input.PauseAction
    | Input.PointerDownAction
    | Input.PointerUpAction
    | Input.PointerMoveAction;
}
export namespace Input {
  export type WheelSourceActions = {
    type: 'wheel';
    id: string;
    actions: [...Input.WheelSourceAction[]];
  };
}
export namespace Input {
  export type WheelSourceAction = Input.PauseAction | Input.WheelScrollAction;
}
export namespace Input {
  export type PauseAction = {
    type: 'pause';
    duration?: JsUint;
  };
}
export namespace Input {
  export type KeyDownAction = {
    type: 'keyDown';
    value: string;
  };
}
export namespace Input {
  export type KeyUpAction = {
    type: 'keyUp';
    value: string;
  };
}
export namespace Input {
  export type PointerUpAction = {
    type: 'pointerUp';
    button: JsUint;
  } & Input.PointerCommonProperties;
}
export namespace Input {
  export type PointerDownAction = {
    type: 'pointerDown';
    button: JsUint;
  } & Input.PointerCommonProperties;
}
export namespace Input {
  export type PointerMoveAction = {
    type: 'pointerMove';
    x: JsInt;
    y: JsInt;
    duration?: JsUint;
    origin?: Input.Origin;
  } & Input.PointerCommonProperties;
}
export namespace Input {
  export type WheelScrollAction = {
    type: 'scroll';
    x: JsInt;
    y: JsInt;
    deltaX: JsInt;
    deltaY: JsInt;
    duration?: JsUint;
    /**
     * @defaultValue `"viewport"`
     */
    origin?: Input.Origin;
  };
}
export namespace Input {
  export type PointerCommonProperties = {
    /**
     * @defaultValue `1`
     */
    width?: JsUint;
    /**
     * @defaultValue `1`
     */
    height?: JsUint;
    /**
     * @defaultValue `0`
     */
    pressure?: number;
    /**
     * @defaultValue `0`
     */
    tangentialPressure?: number;
    /**
     * Must be between `0` and `359`, inclusive.
     *
     * @defaultValue `0`
     */
    twist?: number;
  } & (Input.TiltProperties | Input.AngleProperties);
}
export namespace Input {
  export type AngleProperties = {
    /**
     * @defaultValue `0`
     */
    altitudeAngle?: number;
    /**
     * @defaultValue `0`
     */
    azimuthAngle?: number;
  };
}
export namespace Input {
  export type TiltProperties = {
    /**
     * Must be between `-90` and `90`, inclusive.
     *
     * @defaultValue `0`
     */
    tiltX?: number;
    /**
     * Must be between `-90` and `90`, inclusive.
     *
     * @defaultValue `0`
     */
    tiltY?: number;
  };
}
export namespace Input {
  export type Origin = 'viewport' | 'pointer' | Input.ElementOrigin;
}
export namespace Input {
  export type ReleaseActions = {
    method: 'input.releaseActions';
    params: Input.ReleaseActionsParameters;
  };
}
export namespace Input {
  export type ReleaseActionsParameters = {
    context: BrowsingContext.BrowsingContext;
  };
}
