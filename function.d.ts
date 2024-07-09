// JSBox Built-in Functions TypeScript Declaration

declare function $l10n(key: string): string;
declare function $delay(seconds: number, callback: () => void): { cancel: () => void };
declare function $wait(seconds: number): Promise<void>;
declare function $rect(x: number, y: number, width: number, height: number): JBRect;
declare function $size(width: number, height: number): JBSize;
declare function $point(x: number, y: number): JBPoint;
declare function $insets(top: number, left: number, bottom: number, right: number): JBInsets;
declare function $color(hexOrName: string): UIColor;
declare function $color(DarkModeOptions: {
    light: string;
    dark: string;
    black?: string;
}): UIColor;
declare function $color(lightColor: string | UIColor, darkColor: string | UIColor): UIColor;
declare function $rgb(red: number, green: number, blue: number): UIColor;
declare function $rgba(red: number, green: number, blue: number, alpha: number): UIColor;
declare function $font(size: number): UIFont;
declare function $font(name: string, size: number): UIFont;
declare function $range(location: number, length: number): JBRange;
declare function $indexPath(section: number, row: number): NSIndexPath;
declare function $data(content: {
    string?: string;
    encoding?: number;
    path?: string;
    url?: string;
    base64?: string;
    byteArray?: number[];
}): NSData;
declare function $image(source: string, scale?: number): UIImage;
declare function $image(lightModeSource: string | UIImage, darkModeSource: string | UIImage): UIImage;
declare function $image(source: { light: string; dark: string; }, scale?: number): UIImage;
declare function $icon(code: string, color?: UIColor, size?: JBSize): BBFileIcon;
declare function $accessibilityAction(name: string, handler: () => void): UIAccessibilityCustomAction;

declare function $objc(className: string): any;
declare function $define(options: {
    type: string;
    events?: object;
    classEvents?: object;
}): any;
declare function $delegate(options: {
    type: string;
    events?: object;
}): any;
declare function $block(definition: string, handler: Function): any;
declare function $defc(...args: string[]): any;
declare function $objc_retain(object: any): void;
declare function $objc_release(object: any): void;
declare function $get_protocol(name: string): any;
declare function $objc_clean(): void;

declare function $include(path: string): void;
declare function $props(object: any): string[];
declare function $desc(object: any): any;

declare function $(selector: string): AllUIView;
declare function $notify(name: string, info?: any): void;