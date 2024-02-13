// JSBox Photo API TypeScript Declaration

namespace PhotoTypes {
    interface PhotoResponse {
        image?: UIImage; // format为image时返回，默认如此
        data?: NSData;  // format为data时返回，pick方法可用
        status: boolean;
        filename: string;
        metadata: object; // 非常复杂的对象，不做类型定义了
    }

    interface MultiPhotosResponse {
        status: boolean;
        results: Omit<PhotoResponse, "status">[];
    }

    interface ScanResponse {
        status: boolean;
        results: UIImage[];
    }

    interface TakeOptions {
        edit?: boolean;
        mediaTypes?: string[];
        maxDuration?: number;
        quality?: number;
        showsControls?: boolean;
        device?: number;
        flashMode?: number;
        handler: (resp: PhotoResponse) => void;
    }

    interface PickOptions extends TakeOptions {
        format?: "image" | "data";
    }

    interface MultiPickOptions extends Omit<TakeOptions,"handler"> {
        format?: "image" | "data";
        multi: true;
        selectionLimit?: number;
        handler: (resp: MultiPhotosResponse) => void;
    }

    interface PromptOptions {
        handler: (resp: PhotoResponse) => void;
    }

    interface ScanOptions {
        handler: (resp: ScanResponse) => void;
    }

    interface SaveOptions {
        data?: NSData; // data和image二选一
        image?: UIImage;
        handler: (success: boolean) => void;
    }

    interface FetchOptions {
        count: number;
        type?: number;
        subType?: number;
        format?: "image" | "data";
        size?: { width: number; height: number }; 
        handler: (images: UIImage[] | NSData[]) => void; 
    }

    interface DeleteOptions {
        count: number;
        handler: (success: boolean) => void;
    }
}

interface Photo {
    take(options: PhotoTypes.TakeOptions): void;
    take(options: Omit<PhotoTypes.TakeOptions, "handler">): Promise<PhotoTypes.PhotoResponse>;
    pick(options: PhotoTypes.PickOptions): void;
    pick(options: Omit<PhotoTypes.PickOptions, "handler">): Promise<PhotoTypes.PhotoResponse>;
    pick(options: PhotoTypes.MultiPickOptions): void;
    pick(options: Omit<PhotoTypes.MultiPickOptions, "handler">): Promise<PhotoTypes.MultiPhotosResponse>;
    prompt(options: PhotoTypes.PromptOptions): void; // 仅支持handler形式的回调
    scan(options: PhotoTypes.ScanOptions): void; // 仅支持handler形式的回调（与文档描述不符）
    save(options: PhotoTypes.SaveOptions): void; // 仅支持handler形式的回调
    fetch(options: PhotoTypes.FetchOptions): void;
    fetch(options: Omit<PhotoTypes.FetchOptions, "handler">): Promise<UIImage[] | NSData[]>;
    delete(options: PhotoTypes.DeleteOptions): void; // 仅支持handler形式的回调
}

declare const $photo: Photo;
