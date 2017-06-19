import * as _ from "lodash";
import * as Hapi from "hapi";


export async function googleFunctionsHttpToHapi(
    googleRequest: GoogleFunctionsHttpRequest,
    googleResponse: GoogleFunctionsHttpResponse,
    server: Hapi.Server
) {

    const hapiResponse = await server.inject({
        method: googleRequest.method,
        url: googleRequest.url,
        headers: googleRequest.headers,
        payload: googleRequest.body,
    });

    _.forEach(hapiResponse.headers, (value, key) =>
        googleResponse.setHeader(key, value));

    googleResponse
        .status(hapiResponse.statusCode)
        .send(hapiResponse.rawPayload);
}

export interface GoogleFunctionsHttpRequest {

    _readableState: any;

    readable: any;

    domain: any;

    _events: any;

    _eventsCount: any;

    _maxListeners: any;

    socket: any;

    connection: any;

    httpVersionMajor: any;

    httpVersionMinor: any;

    httpVersion: any;

    complete: any;

    headers: any;

    rawHeaders: any;

    trailers: any;

    rawTrailers: any;

    upgrade: any;

    url: any;

    method: any;

    statusCode: any;

    statusMessage: any;

    client: any;

    _consuming: any;

    _dumped: any;

    next: any;

    baseUrl: any;

    originalUrl: any;

    _parsedUrl: any;

    params: any;

    query: any;

    res: any;

    body: any;
}

export interface GoogleFunctionsHttpResponse {

    domain: any;

    _events: any;

    _eventsCount: any;

    _maxListeners: any;

    output: any;

    outputEncodings: any;

    outputCallbacks: any;

    outputSize: any;

    writable: any;

    _last: any;

    upgrading: any;

    chunkedEncoding: any;

    shouldKeepAlive: any;

    useChunkedEncodingByDefault: any;

    sendDate: any;

    _removedHeader: any;

    _contentLength: any;

    _hasBody: any;

    _trailer: any;

    finished: any;

    _headerSent: any;

    socket: any;

    connection: any;

    _header: any;

    _headers: any;

    _headerNames: any;

    _onPendingData: any;

    _sent100: any;

    _expect_continue: any;

    req: any;

    local: any;

    status(code: number): GoogleFunctionsHttpResponse;

    setHeader(key: string, value: string): void;

    send(payload: any): void;
}
