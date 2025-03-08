// JSBox Keyboard API TypeScript Declaration

interface Keyboard {
  insert(text: string): void;
  delete(): void;
  moveCursor(positions: number): void;
  playInputClick(): void;
  readonly hasText: boolean;
  readonly selectedText: string;
  readonly textBeforeInput: string;
  readonly textAfterInput: string;
  getAllText(handler: (text: string) => void): void;
  next(): void;
  send(): void;
  dismiss(): void;
  barHidden: boolean;
  height: number;
}

declare const $keyboard: Keyboard;
