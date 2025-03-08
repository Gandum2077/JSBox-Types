// JSBox Input API TypeScript Declaration

namespace InputTypes {
  interface TextOptions {
    text?: string; // 文档中未提及，但实际可用
    type?: number; // $kbType
    placeholder?: string;
    handler: (text: string) => void;
  }

  interface SpeechOptions {
    locale?: string;
    autoFinish?: boolean;
    handler: (text: string) => void;
  }
}

interface Input {
  text(options: InputTypes.TextOptions): void;
  text(options?: Omit<InputTypes.TextOptions, "handler">): Promise<string>;
  speech(options: InputTypes.SpeechOptions): void;
  speech(options?: Omit<InputTypes.SpeechOptions, "handler">): Promise<string>;
}

declare const $input: Input;
