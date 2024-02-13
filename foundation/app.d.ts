// JSBox App API TypeScript Declaration

namespace AppTypes {
    interface AppInfo {
        bundleID: string;
        version: string;
        build: string;
    }

    interface OpenBrowserOptions {
        type: number;
        url: string;
    }

    interface ListenEvents {
        ready?: () => void;
        exit?: () => void;
        pause?: () => void;
        resume?: () => void;
        [event: string]: ((object?: any) => void) | undefined;
    }

    interface NotifyOptions {
        name: string;
        object?: any;
    }

    interface Strings {
        [language: string]: {
            [key: string]: string;
        };
    }
}

interface App {
    theme: "light" | "dark" | "auto";
    minSDKVer: string;
    minOSVer: string;
    tips(message: string): void;
    info: AppTypes.AppInfo;
    idleTimerDisabled: boolean;
    close(delay?: number): void;
    isDebugging: boolean;
    env: number; // 值在$env中
    widgetIndex: number; // 0 ~ 2，其他值表示不是小组件
    autoKeyboardEnabled: boolean;
    keyboardToolbarEnabled: boolean;
    rotateDisabled: boolean;
    openURL(url: string): void;
    openBrowser(options: AppTypes.OpenBrowserOptions): void;
    openExtension(extension: string): void;
    listen(events: AppTypes.ListenEvents): void;
    notify(options: AppTypes.NotifyOptions): void;
    strings: AppTypes.Strings;
}

declare const $app: App;
