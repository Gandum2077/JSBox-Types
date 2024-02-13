// JSBox Widget API TypeScript Declaration

namespace WidgetTypes {
    interface WidgetEntry {
        date?: Date;
        info?: object;
    }

    interface WidgetPolicy {
        atEnd?: boolean; // 该方式在最后一个 entry 被使用之后，进行一次新的时间线获取。
        afterDate?: Date;
        never?: boolean; // 该方式表示时间线为静态内容，不会周期性地更新。
    }

    interface WidgetContext {
        entry: WidgetEntry;
        family: number; // 0 ~ 3 分别表示小、中、大、超大
        displaySize: JBSize; // 返回当前小组件的显示大小
        isDarkMode: boolean; // 是否为深色模式
    }

    interface WidgetOptions {
        entries?: WidgetEntry[];
        policy?: WidgetPolicy;
        render: (context: WidgetContext) => AllWidgetOptions;
    }

    type AllWidgetTypes = "text" | "image" | "color" | "gradient" | "divider"
    | "hstack" | "vstack" | "zstack" | "spacer" | "hgrid" | "vgrid";

    type AllWidgetOptions = WidgetTextOptions | WidgetImageOptions | WidgetColorOptions
    | WidgetGradientOptions | WidgetDividerOptions | WidgetHstackOptions | WidgetVstackOptions
    | WidgetZstackOptions | WidgetSpacerOptions | WidgetHgridOptions | WidgetVgridOptions;

    interface WidgetBaseOptions {
        type: AllWidgetTypes;
        views?: AllWidgetOptions[];
    }

    interface BasePropsModifiers {
        frame?: {
            width?: number;
            height?: number;
            alignment?: number | string;
            minWidth?: number;
            idealWidth?: number;
            maxWidth?: number;
            minHeight?: number;
            idealHeight?: number;
            maxHeight?: number;
        };
        position?: JBPoint;
        offset?: JBPoint;
        padding?: number | JBInsets;
        layoutPriority?: number;
        cornerRadius?: number | {
            value: number;
            style: 0 | 1 // 0: circular, 1: continuous
        };
        border?: {
            color?: UIColor;
            width?: number
        };
        clipped?: boolean | { antialiased: boolean };
        opacity?: number;
        rotationEffect?: number; // 弧度角
        blur?: number;
        background?: UIColor | UIImage | WidgetImageOptions | WidgetGradientOptions;
        link?: string;
        widgetURL?: string;
    }

    interface TextPropsModifiers extends BasePropsModifiers {
        bold?: boolean;
        font?: UIFont | {
            name: string;
            size: number;
            weight?: "ultraLight" | "thin" | "light" | "regular"
            | "medium" | "semibold" | "bold" | "heavy" | "black";
            monospaced?: boolean;
        };
        lineLimit?: number;
        minimumScaleFactor?: number;
    }

    interface ImagePropsModifiers extends BasePropsModifiers {
        resizable?: boolean;
        scaledToFill?: boolean;
        scaledToFit?: boolean;
        accessibilityHidden?: boolean;
        accessibilityLabel?: string;
        accessibilityHint?: string;
    }

    interface TextProps extends TextPropsModifiers{
        text?: string;
        date?: Date; // date 和 style 配合使用，显示一个时间或日期
        style?: number | string; // $widget.dateStyle, 也可以直接使用字符串常量
        startDate?: Date; // startDate 和 endDate 配合使用，来显示一个时间区间
        endDate?: Date;
    }

    interface WidgetTextOptions extends WidgetBaseOptions {
        type: "text";
        props?: TextProps;
        modifiers?: TextPropsModifiers[];
    }

    interface ImageProps extends ImagePropsModifiers {
        image?: UIImage;
        data?: NSData;
        symbol?: string | {
            glyph: string,
            size: number, // Default: 24
            weight: "ultraLight" | "thin" | "light" | "regular"
            | "medium" | "semibold" | "bold" | "heavy" | "black"; // Default: "regular"
        };
        resizable?: boolean;
        path?: string;
        uri?: string; // URL or Base64
    }

    interface WidgetImageOptions extends WidgetBaseOptions {
        type: "image";
        props?: ImageProps;
        modifiers?: ImagePropsModifiers[];
    }

    interface ColorPros extends BasePropsModifiers {
        color?: UIColor | string;
        light?: string;
        dark?: string;
    }

    interface WidgetColorOptions extends WidgetBaseOptions {
        type: "color";
        props?: ColorPros;
        modifiers?: BasePropsModifiers[];
    }

    interface GradientProps extends BasePropsModifiers {
        startPoint?: JBPoint;
        endPoint?: JBPoint;
        locations?: number[];
        colors: UIColor[];
    }

    interface WidgetGradientOptions extends WidgetBaseOptions {
        type: "gradient";
        props?: GradientProps;
        modifiers?: BasePropsModifiers[];
    }

    interface DividerProps extends Omit<BasePropsModifiers, "background"> {
        color?: UIColor;
    }

    interface WidgetDividerOptions extends WidgetBaseOptions {
        type: "divider";
        props?: DividerProps;
        modifiers?: BasePropsModifiers[];
    }

    interface HstackProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.verticalAlignment, 也可以直接使用字符串常量
        spacing?: number;
    }

    interface WidgetHstackOptions extends WidgetBaseOptions {
        type: "hstack";
        props?: HstackProps;
        modifiers?: BasePropsModifiers[];
    }

    interface VstackProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.horizontalAlignment, 也可以直接使用字符串常量
        spacing?: number;
    }

    interface WidgetVstackOptions extends WidgetBaseOptions {
        type: "vstack";
        props?: VstackProps;
        modifiers?: BasePropsModifiers[];
    }

    interface ZstackProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.alignment, 也可以直接使用字符串常量
    }

    interface WidgetZstackOptions extends WidgetBaseOptions {
        type: "zstack";
        props?: ZstackProps;
        modifiers?: BasePropsModifiers[];
    }

    interface SpacerProps extends BasePropsModifiers {
        minLength?: number;
    }

    interface WidgetSpacerOptions extends WidgetBaseOptions {
        type: "spacer";
        props?: SpacerProps;
        modifiers?: BasePropsModifiers[];
    }

    interface GridItems {
        fixed?: number;
        flexible?: {
            minimum: number;
            maximum: number
        };
        adaptive?: {
            minimum: number;
            maximum: number
        };
        spacing?: number;
        alignment?: number | string; // $widget.alignment, 也可以直接使用字符串常量
    }

    interface HgridProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.verticalAlignment, 也可以直接使用字符串常量
        spacing?: number;
        rows?: GridItems[];
    }

    interface WidgetHgridOptions extends WidgetBaseOptions {
        type: "hgrid";
        props?: HgridProps;
        modifiers?: BasePropsModifiers[];
    }

    interface VgridProps extends BasePropsModifiers {
        alignment?: number | string; // $widget.horizontalAlignment, 也可以直接使用字符串常量
        spacing?: number;
        columns?: GridItems[];
    }

    interface WidgetVgridOptions extends WidgetBaseOptions {
        type: "vgrid";
        props?: VgridProps;
        modifiers?: BasePropsModifiers[];
    }
}

interface Widget {
    height: number; // deprecated, 属于Today小组件
    mode: number; // deprecated, 属于Today小组件, 0: 折叠 1: 展开
    modeChanged: (mode: number) => void; // deprecated, 属于Today小组件,观察 widget 折叠展开状态的变化

    setTimeline(options: WidgetTypes.WidgetOptions): void;
    reloadTimeline(): void;
    inputValue: string;
    family: number; // 0 ~ 3 分别表示小、中、大、超大
    displaySize: JBSize; // 返回当前小组件的显示大小
    isDarkMode: boolean; // 是否为深色模式
    alignment: {
        center: 0;
        leading: 1;
        trailing: 2;
        top: 3;
        bottom: 4;
        topLeading: 5;
        topTrailing: 6;
        bottomLeading: 7;
        bottomTrailing: 8;
    };
    horizontalAlignment: {
        leading: 0;
        center: 1;
        trailing: 2;
    };
    verticalAlignment: {
        top: 0;
        center: 1;
        bottom: 2;
        firstTextBaseline: 3;
        lastTextBaseline: 4;
    };
    dateStyle: {
        time: 0;
        date: 1;
        relative: 2;
        offset: 3;
        timer: 4;
    };
}

declare const $widget: Widget;