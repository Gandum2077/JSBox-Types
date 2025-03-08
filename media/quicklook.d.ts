// JSBox QuickLook API TypeScript Declaration

namespace QuicklookTypes {
  // 定义QuickLookOpenOptions时，请注意每次只能使用以下属性中的一种。
  // 使用时，请根据实际需要选择合适的属性，并确保不要同时使用多个。
  interface QuickLookOpenOptions {
    url?: string; // 使用URL预览内容
    type?: string; // 指定内容类型
    data?: NSData; // 使用Data对象预览内容
    image?: UIImage; // 使用Image对象预览内容
    text?: string; // 使用纯文本内容预览
    json?: string; // 使用JSON对象预览内容
    html?: string; // 使用HTML内容预览
    list?: string[] | NSData[];
    // 使用文件列表预览内容，list 内容必须全部为 data 或者全部是链接
    handler?: () => void; // 预览关闭时调用
  }
}

interface QuickLook {
  open(options: QuicklookTypes.QuickLookOpenOptions): void;
}

declare const $quicklook: QuickLook;
