// JSBox System API TypeScript Declaration

namespace SystemTypes {
  interface IconOptions {
    title: string;
    url: string;
    icon: UIImage;
  }
}

interface System {
  brightness: number; // 屏幕亮度 (0.0 ~ 1.0)
  volume: number; // 扬声器音量 (0.0 ~ 1.0)
  call(number: string): void;
  sms(number: string): void;
  mailto(email: string): void;
  facetime(number: string): void;
  makeIcon(options: SystemTypes.IconOptions): void;
}

declare const $system: System;
