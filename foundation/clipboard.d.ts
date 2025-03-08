// JSBox Clipboard API TypeScript Declaration

namespace ClipboardTypes {
  interface ClipboardItem {
    type: string;
    value: string;
  }

  interface ClipboardCopyOptions {
    text?: string;
    image?: NSData;
    data?: NSData;
    ttl?: number;
    locally?: boolean;
  }
}

interface Clipboard {
  text?: string;
  image?: NSData; // 请注意返回的是二进制数据
  items: any[];
  phoneNumbers: string[];
  phoneNumber?: string;
  links: string[];
  link?: string;
  emails: string[];
  email?: string;
  dates: Date[];
  date?: Date;

  setTextLocalOnly(text: string): void;
  set(item: ClipboardTypes.ClipboardItem): void;
  copy(options: ClipboardTypes.ClipboardCopyOptions): void;
  clear(): void;
}

declare const $clipboard: Clipboard;
