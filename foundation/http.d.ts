// JSBox Network API TypeScript Declaration

// 本模块的官方文档写的比较混乱，以下参杂了一些实测结果

namespace HttpTypes {
    enum NSURLErrorDomain {
        NSURLErrorUnknown = -1,
        NSURLErrorCancelled = -999,
        NSURLErrorBadURL = -1000,
        NSURLErrorTimedOut = -1001,
        NSURLErrorUnsupportedURL = -1002,
        NSURLErrorCannotFindHost = -1003,
        NSURLErrorCannotConnectToHost = -1004,
        NSURLErrorNetworkConnectionLost = -1005,
        NSURLErrorDNSLookupFailed = -1006,
        NSURLErrorHTTPTooManyRedirects = -1007,
        NSURLErrorResourceUnavailable = -1008,
        NSURLErrorNotConnectedToInternet = -1009,
        NSURLErrorRedirectToNonExistentLocation = -1010,
        NSURLErrorBadServerResponse = -1011,
        NSURLErrorUserCancelledAuthentication = -1012,
        NSURLErrorUserAuthenticationRequired = -1013,
        NSURLErrorZeroByteResource = -1014,
        NSURLErrorCannotDecodeRawData = -1015,
        NSURLErrorCannotDecodeContentData = -1016,
        NSURLErrorCannotParseResponse = -1017,
        NSURLErrorAppTransportSecurityRequiresSecureConnection = -1022,
        NSURLErrorFileDoesNotExist = -1100,
        NSURLErrorFileIsDirectory = -1101,
        NSURLErrorNoPermissionsToReadFile = -1102,
        NSURLErrorDataLengthExceedsMaximum = -1103,
        NSURLErrorSecureConnectionFailed = -1200,
        NSURLErrorServerCertificateHasBadDate = -1201,
        NSURLErrorServerCertificateUntrusted = -1202,
        NSURLErrorServerCertificateHasUnknownRoot = -1203,
        NSURLErrorServerCertificateNotYetValid = -1204,
        NSURLErrorClientCertificateRejected = -1205,
        NSURLErrorClientCertificateRequired = -1206,
        NSURLErrorCannotLoadFromNetwork = -2000,
        NSURLErrorCannotCreateFile = -3000,
        NSURLErrorCannotOpenFile = -3001,
        NSURLErrorCannotCloseFile = -3002,
        NSURLErrorCannotWriteToFile = -3003,
        NSURLErrorCannotRemoveFile = -3004,
        NSURLErrorCannotMoveFile = -3005,
        NSURLErrorDownloadDecodingFailedMidStream = -3006,
        NSURLErrorDownloadDecodingFailedToComplete = -3007,
        NSURLErrorInternationalRoamingOff = -1018,
        NSURLErrorCallIsActive = -1019,
        NSURLErrorDataNotAllowed = -1020,
        NSURLErrorRequestBodyStreamExhausted = -1021,
        NSURLErrorBackgroundSessionRequiresSharedContainer = -995,
        NSURLErrorBackgroundSessionInUseByAnotherProcess = -996,
        NSURLErrorBackgroundSessionWasDisconnected = -997
    }
    interface NSURLError extends NSError {
        code: NSURLErrorDomain;
    }

    interface HttpRequestOptions {
        method?: string;
        url: string;
        header?: Record<string, any>;
        body?: Record<string, any> | NSData;
        timeout?: number;
        form?: Record<string, any>;
        proxy?: {
            HTTPEnable: boolean;
            HTTPProxy: string;
            HTTPPort: number;
            HTTPSEnable: boolean;
            HTTPSProxy: string;
            HTTPSPort: number;
        };
        handler: (response: HttpResponse) => void;
    }

    interface DownloadOptions {
        url: string;
        header?: Record<string, any>;
        body?: Record<string, any> | NSData;
        //timeout?: number; // 实测timeout对于$http.download无效
        form?: Record<string, any>;
        proxy?: {
            HTTPEnable: boolean;
            HTTPProxy: string;
            HTTPPort: number;
            HTTPSEnable: boolean;
            HTTPSProxy: string;
            HTTPSPort: number;
        };
        showsProgress?: boolean;
        backgroundFetch?: boolean;
        progress?: (bytesWritten: number, totalBytes: number) => void; // upload/download 中进度回调
        message?: string; // upload/download 中的提示语
        handler: (response: DownloadResponse) => void;
    }

    interface UploadOptions extends HttpRequestOptions {
        files?: Array<{
            image?: UIImage;
            data?: NSData;
            name: string;
            filename: string;
            "content-type"?: string;
        }>;
        progress?: (bytesWritten: number, totalBytes: number) => void; // upload/download 中进度回调
        message?: string; // upload/download 中的提示语
        progress?: (percentage: number) => void;
    }

    interface HttpResponse {
        data: any;
        rawData: NSData;
        response: Response;
        error?: NSURLError;
    }

    interface DownloadResponse {
        data: NSData;
        response: Response;
        error?: NSURLError;
    }

    interface Response {
        url: string;
        MIMEType: string;
        expectedContentLength: number;
        textEncodingName: string;
        suggestedFilename: string;
        statusCode: number;
        headers: Record<string, string>;
    }

    interface ServerResult {
        success: boolean;
        publicServerURL: string;
        url: string;
        error?: NSURLError;
        port: number;
    }
}

interface Http {
    // 使用handler的回调形式
    request(options: HttpTypes.HttpRequestOptions): void;
    get(options: HttpTypes.HttpRequestOptions): void;
    post(options: HttpTypes.HttpRequestOptions): void;
    download(options: HttpTypes.DownloadOptions): void;
    upload(options: HttpTypes.UploadOptions): void;

    // 返回Promise的异步形式
    request(options: Omit<HttpTypes.HttpRequestOptions, 'handler'>): Promise<HttpTypes.HttpResponse>;
    get(options: Omit<HttpTypes.HttpRequestOptions, 'handler'>): Promise<HttpTypes.HttpResponse>;
    post(options: Omit<HttpTypes.HttpRequestOptions, 'handler'>): Promise<HttpTypes.HttpResponse>;
    download(options: Omit<HttpTypes.DownloadOptions, 'handler'>): Promise<HttpTypes.DownloadResponse>;
    upload(options: Omit<HttpTypes.UploadOptions, 'handler'>): Promise<HttpTypes.HttpResponse>;

    startServer(options: {
        port: number;
        path: string;
        handler: (result: HttpTypes.ServerResult) => void
    }): void;
    stopServer(): void;
    shorten(options: { url: string; handler: (url: string) => void }): void; // deprecated
    lengthen(options: { url: string; handler: (url: string) => void }): void;
    lengthen(options: { url: string }): Promise<string>;
}

declare const $http: Http;