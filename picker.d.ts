// JSBox Picker API TypeScript Declaration

interface Picker {
    date(args?: object): Promise<Date>; // 实测参数可能无效
    data(args?: object): Promise<string[]>; // 实测参数可能无效，本API无效
    color(args?: { color: UIColor }): Promise<UIColor>; // 参数为默认颜色
}

declare const $picker: Picker;