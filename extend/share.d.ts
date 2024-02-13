// JSBox Share API TypeScript Declaration

namespace ShareTypes {
    interface ShareItem {
        name?: string;
        data?: NSData; // 用于二进制数据
    }

    interface ShareSheetOptions {
        items?: ShareItem[] | NSData[] | UIImage[] | string[]; // 目前支持的数据类型：文本、链接、图片和二进制数据
        item?: ShareItem | NSData | UIImage | string; 
        handler?: (success: boolean) => void; // 可选的回调函数
    }
}

interface Share {
    sheet(options: ShareTypes.ShareSheetOptions | string[] | string): void;
    wechat(content: NSData | UIImage | string): void; // 支持文本、图片和图片二进制数据
    qq(content: NSData | UIImage | string): void; // 支持文本、图片和图片二进制数据
    universal(content: NSData | UIImage): void; // 支持图片和图片二进制数据
}

declare const $share: Share;
