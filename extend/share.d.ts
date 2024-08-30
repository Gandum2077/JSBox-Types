// JSBox Share API TypeScript Declaration

namespace ShareTypes {
    interface ShareItem {
        name?: string;
        data?: NSData; // 用于二进制数据
    }

    interface ShareSheetOptions {
        // 如果使用ShareSheetOptions，items和item只能传一个，handler必须传
        items?: ShareItem[] | NSData[] | UIImage[] | string[]; // 目前支持的数据类型：文本、链接、图片和二进制数据
        item?: ShareItem | NSData | UIImage | string; 
        handler: (success: boolean) => void; // 必须
    }
}

interface Share {
    sheet(options: ShareTypes.ShareSheetOptions | (NSData | UIImage | string)[] | NSData | UIImage | string): void;
    // 理论上sheet方法可以在数组中传入混合类型的数据，但是并没有什么实际效果
    wechat(content: NSData | UIImage | string): void; // 支持文本、图片和图片二进制数据
    qq(content: NSData | UIImage | string): void; // 支持文本、图片和图片二进制数据
    universal(content: NSData | UIImage): void; // 支持图片和图片二进制数据
}

declare const $share: Share;
