// JSBox Network API TypeScript Declaration

namespace HttpTypes {
    interface HttpRequestOptions {
        method?: string;
        url: string;
        header?: Record<string, string>;
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
        showsProgress?: boolean;
        backgroundFetch?: boolean;
        handler?: (response: HttpResponse) => void;
    }

    interface DownloadOptions extends Omit<HttpRequestOptions, "handler"> {
        progress?: (bytesWritten: number, totalBytes: number) => void;
        handler?: (response: DownloadResponse) => void;
    }

    interface UploadOptions extends HttpRequestOptions {
        files?: Array<{
            image?: UIImage;
            data?: NSData;
            name: string;
            filename: string;
            "content-type"?: string;
        }>;
        progress?: (percentage: number) => void;
    }

    interface HttpResponse {
        data: string;
        rawData: NSData;
        response: Response;
        error: NSError;
    }

    interface DownloadResponse {
        data: NSData;
        response: Response;
        error: NSError;
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
        error?: NSError;
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

    startServer(
        options: {
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
