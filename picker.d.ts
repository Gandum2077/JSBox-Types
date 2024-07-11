// JSBox Picker API TypeScript Declaration

interface Picker {
    date(args?: {
        props: {
            date?: Date;
            min?: Date;
            max?: Date;
            mode?: number;
            interval?: number;
        }
    }): Promise<Date>;
    date(args?: {
        props: {
            date?: Date;
            min?: Date;
            max?: Date;
            mode?: number;
            interval?: number;
        },
        handler: (date: Date) => void;
    }): void;
    data(args: {
        props: {
            items: any[];
        }
    }): Promise<string[]>;
    data(args: {
        props: {
            items: any[];
        },
        handler: (index: number) => void;
    }): void;
    color(args?: { color: UIColor }): Promise<UIColor>; // 参数为默认颜色
    color(args?: { color: UIColor }, handler: (color: UIColor) => void): void; // 参数为默认颜色
}

declare const $picker: Picker;