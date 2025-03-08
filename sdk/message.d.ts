// JSBox Message API TypeScript Declaration

namespace MessageTypes {
  interface SMSOptions {
    recipients: string[];
    body: string;
    subject?: string;
    attachments?: NSData[];
    handler?: (result: 0 | 1 | 2) => void; // 0: 取消 1: 成功 2: 失败
  }

  interface MailOptions {
    subject: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    body: string;
    isHTML?: boolean;
    attachments?: NSData[];
    handler?: (result: 0 | 1 | 2 | 3) => void; // 0: 取消 1: 保存 2: 成功 3: 失败
  }
}

interface Message {
  sms(options: MessageTypes.SMSOptions): void;
  mail(options: MessageTypes.MailOptions): void;
}

declare const $message: Message;
