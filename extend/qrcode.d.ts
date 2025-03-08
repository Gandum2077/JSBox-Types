// JSBox Qrcode API TypeScript Declaration

namespace QrcodeTypes {
  interface ScanOptions {
    useFrontCamera?: boolean; // 是否使用前置摄像头，默认为false
    turnOnFlash?: boolean; // 是否打开闪光灯，默认为false
    handler: (result: string) => void; // 扫描成功后的回调函数，参数为扫描结果字符串
    cancelled?: () => void; // 用户取消扫描的回调函数
  }
}

interface Qrcode {
  encode(text: string): UIImage;
  decode(image: UIImage): string;
  scan(options: QrcodeTypes.ScanOptions | ((result: string) => void)): void;
}

declare const $qrcode: Qrcode;
