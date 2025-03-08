// JSBox Browser API TypeScript Declaration

declare namespace BrowserTypes {
  interface ExecOptions {
    script: string | (() => void);
    handler?: (result: any) => void;
    customEvent?: (message: any) => void;
  }
}

interface Browser {
  exec(options: BrowserTypes.ExecOptions | string): Promise<any>;
}

declare const $browser: Browser;
