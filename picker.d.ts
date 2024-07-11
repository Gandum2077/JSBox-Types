// JSBox Picker API TypeScript Declaration

interface Picker {
    date(args?: {
        props: {
            date?: Date;
            min?: Date;
            max?: Date;
            mode?: number;
            interval: number;
        }
    }): Promise<Date>;
    data(args: {
        props: {
            items: any[];
        }
    }): Promise<string[]>;
    color(args?: { color: UIColor }): Promise<UIColor>; // 参数为默认颜色
}

declare const $picker: Picker;