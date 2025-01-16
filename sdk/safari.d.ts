// JSBox Safari API TypeScript Declaration

namespace SafariTypes {
    interface OpenOptions {
        url: string;
        entersReader?: boolean;
        height?: number;
        handler?: () => void; // 完成后的回调
    }

    interface ReadingItemOptions {
        url: string;
        title?: string;
        preview?: string;
    }
}

interface Safari {
    open(options: SafariTypes.OpenOptions): void;
    items: any;
    inject(script: string): void;
    addReadingItem(options: SafariTypes.ReadingItemOptions): void;
}

declare const $safari: Safari;
