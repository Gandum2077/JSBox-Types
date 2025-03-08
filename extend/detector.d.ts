// JSBox Detector API TypeScript Declaration

interface Detector {
  date(text: string): string[];
  address(text: string): string[];
  link(text: string): string[];
  phoneNumber(text: string): string[];
}

declare const $detector: Detector;
