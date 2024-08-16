// JSBox UI API TypeScript Declaration

declare namespace UiTypes {

    interface StyledTextOptions {
        text: string;
        font?: UIFont;
        color?: UIColor;
        markdown?: boolean; // 使用 styles 默认不使用 markdown 语法
        styles?: {
            range: JBRange;
            font?: UIFont;
            color?: UIColor;
            bgcolor?: UIColor;
            kern?: number; // 字距
            strikethroughStyle?: number; // 删除线样式
            strikethroughColor?: UIColor; // 删除线颜色
            underlineStyle?: number; // 下划线样式
            underlineColor?: UIColor; // 下划线颜色
            strokeWidth?: number; // 描边宽度
            strokeColor?: UIColor; // 描边颜色
            link?: string; // 链接
            baselineOffset?: number; // 基线偏移
            obliqueness?: number; // 斜体
        }[];
    }

    interface NavButtonOptions {
        title?: string;
        image?: UIImage;
        icon?: string;
        symbol?: string;
        menu?: ContextMenuOptions;
        handler: (sender: UIView) => void; // 此处sender为UIButtonBarButton，不单独定义了
    }

    interface ContextMenuOptions {
        title?: string;
        pullDown?: boolean; // Pull-Down 菜单，短按触发，不会背景模糊。navButton上必为Pull-Down 菜单
        asPrimary?: boolean; // 是否短按触发
        items: {
            title?: string;
            inline?: boolean;
            symbol?: string;
            destructive?: boolean;
            handler: (sender: AllUIView, indexPath: NSIndexPath) => void; // 此处sender为来源View
        }[];
    }

    interface BaseViewProps {
        id?: string;
        height?: number; // 仅用于 accessoryView, keyboardView, header, footer
        selectable?: boolean; // 仅用于List的静态cells

        theme?: string;
        alpha?: number;
        bgcolor?: UIColor;
        cornerRadius?: number;
        smoothCorners?: boolean;
        radius?: number;  // deprecated
        smoothRadius?: number; // deprecated
        frame?: JBRect;
        size?: JSSize;
        center?: JBPoint;
        flex?: string;
        userInteractionEnabled?: boolean;
        multipleTouchEnabled?: boolean;
        views?: AllViewOptions[];
        clipsToBounds?: boolean;
        opaque?: boolean;
        hidden?: boolean;
        contentMode?: number; // $contentMode
        tintColor?: UIColor;
        borderWidth?: number;
        borderColor?: UIColor;
        circular?: boolean;
        info?: any;
        intrinsicSize?: JSSize;
        isAccessibilityElement?: boolean;
        accessibilityLabel?: string;
        accessibilityHint?: string;
        accessibilityValue?: string;
        accessibilityCustomActions?: UIAccessibilityCustomAction[]

        menu?: ContextMenuOptions;

    }

    interface BaseViewEvents<T = UIBaseView> {
        ready?: (sender: T) => void;
        tapped?: (sender: T) => void;
        pencilTapped?: (info: {
            action: number; // 0: Ignore, 1: Switch Eraser, 2: Switch Previous, 3: Show Color Palette
            enabled: boolean;
        }) => void;
        hoverEntered?: (sender: T) => void;
        hoverExited?: (sender: T) => void;
        themeChanged?: (sender: T, isDarkMode: boolean) => void;
        longPressed?: (info: { location: JBPoint; sender: T }) => void;
        doubleTapped?: (sender: T) => void;
        touchesBegan?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        touchesMoved?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        touchesEnded?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        touchesCancelled?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        layoutSubviews?: (sender: T) => void;
        height?: (sender: T) => number; // 仅能用在matrix的header和footer
    }

    interface BaseViewOptions {
        views?: AllViewOptions[];
    }

    interface KeyCommand {
        input: string;
        modifiers: number;
        title: string;
        handler: () => void;
    }

    interface RootViewPrefs extends BaseViewProps {
        theme?: "light" | "dark" | "auto";
        title?: string;
        titleColor?: UIColor;
        barColor?: UIColor;
        iconColor?: UIColor;
        debugging?: boolean;
        navBarHidden?: boolean;
        statusBarHidden?: boolean;
        statusBarStyle?: 0 | 1; // 0 为黑色，1 为白色
        fullScreen?: boolean;
        formSheet?: boolean;
        pageSheet?: boolean;
        bottomSheet?: boolean;
        modalInPresentation?: boolean;
        homeIndicatorHidden?: boolean;
        clipsToSafeArea?: boolean;
        keyCommands?: KeyCommand[];

        navButtons?: NavButtonOptions[];
        titleView?: AllViewOptions;
    }

    interface RootViewEvents extends BaseViewEvents {
        appeared?: () => void;
        disappeared?: () => void;
        dealloc?: () => void;
        keyboardHeightChanged?: (height: number) => void;
        shakeDetected?: () => void;
    }

    interface RootViewOptions extends BaseViewOptions {
        prefs: RootViewPrefs;
        layout?: (make: MASConstraintMaker, view: UIView) => void;
        events?: RootViewEvents;
    }

    interface ViewOptions extends BaseViewOptions {
        type: "view";
        props: BaseViewProps;
        layout?: (make: MASConstraintMaker, view: UIView) => void;
        events?: BaseViewEvents;
    }

    interface LabelProps extends BaseViewProps {
        text?: string;
        styledText?: StyledTextOptions;
        font?: UIFont;
        textColor?: UIColor;
        shadowColor?: UIColor;
        align?: number; // $align
        lines?: number;
        autoFontSize?: boolean;
        lineSpacing?: number; // 文档中缺少但实际上存在，表示行间距
    }

    interface LabelOptions extends BaseViewOptions {
        type: "label";
        props: LabelProps;
        layout?: (make: MASConstraintMaker, view: UILabelView) => void;
        events?: BaseViewEvents<UILabelView>;
    }

    interface ButtonProps extends BaseViewProps {
        title?: string;
        titleColor?: UIColor;
        font?: UIFont;
        src?: string; // 图片地址
        source?: {
            url: string,
            placeholder?: UIImage,
            header: Record<string, string>,
        }; //  对图片进行更详细的设定
        symbol?: string; // SF symbols 名称
        image?: UIImage;
        icon?: BBFileIcon;
        type?: number; // $btnType
        contentEdgeInsets?: JBInsets;
        titleEdgeInsets?: JBInsets;
        imageEdgeInsets?: JBInsets;
        enabled?: boolean; // 文档上缺少但实际存在，表示是否可用
    }

    interface ButtonOptions extends BaseViewOptions {
        type: "button";
        props: ButtonProps;
        layout?: (make: MASConstraintMaker, view: UIButtonView) => void;
        events?: BaseViewEvents<UIButtonView>;
    }

    interface InputProps extends BaseViewProps {
        type?: number; // $kbType
        darkKeyboard?: boolean;
        text?: string;
        styledText?: StyledTextOptions;
        textColor?: UIColor;
        font?: UIFont;
        align?: number; // $align
        placeholder?: string;
        clearsOnBeginEditing?: boolean; // 开始时清除文本
        autoFontSize?: boolean; // 是否动态调整字体大小
        // editing
        secure?: boolean; // 是否密码框
        keyboardView?: AllViewOptions;
        accessoryView?: AllViewOptions;
    }

    interface InputEvents extends BaseViewEvents<UIInputView> {
        changed?: (sender: UIInputView) => void;
        returned?: (sender: UIInputView) => void;
        didBeginEditing?: (sender: UIInputView) => void;
        didEndEditing?: (sender: UIInputView) => void;
    }

    interface InputOptions extends BaseViewOptions {
        type: "input";
        props: InputProps;
        layout?: (make: MASConstraintMaker, view: UIInputView) => void;
        events?: InputEvents;
    }

    interface SliderProps extends BaseViewProps {
        value?: number;
        min?: number;
        max?: number;
        continuous?: boolean;
        minColor?: UIColor;
        maxColor?: UIColor;
        thumbColor?: UIColor;
    }

    interface SliderEvents extends BaseViewEvents<UISliderView> {
        changed?: (sender: UISliderView) => void;
    }

    interface SliderOptions extends BaseViewOptions {
        type: "slider";
        props: SliderProps;
        layout?: (make: MASConstraintMaker, view: UISliderView) => void;
        events?: SliderEvents;
    }

    interface SwitchProps extends BaseViewProps {
        on?: boolean;
        onColor?: UIColor; // 开启时颜色
        thumbColor?: UIColor; // 滑块颜色
    }

    interface SwitchEvents extends BaseViewEvents<UISwitchView> {
        changed?: (sender: UISwitchView) => void;
    }

    interface SwitchOptions extends BaseViewOptions {
        type: "switch";
        props: SwitchProps;
        layout?: (make: MASConstraintMaker, view: UISwitchView) => void;
        events?: SwitchEvents;
    }

    interface SpinnerProps extends BaseViewProps {
        loading?: boolean; // 是否加载中
        color?: UIColor;
        style?: number; // 0 ~ 2 表示样式
    }

    interface SpinnerOptions extends BaseViewOptions {
        type: "spinner";
        props: SpinnerProps;
        layout?: (make: MASConstraintMaker, view: UISpinnerView) => void;
        events?: BaseViewEvents<UISpinnerView>;
    }

    interface ProgressProps extends BaseViewProps {
        value?: number;
        progressColor?: UIColor; // 已走进度的颜色
        trackColor?: UIColor; // 进度条背景色
    }

    interface ProgressOptions extends BaseViewOptions {
        type: "progress";
        props: ProgressProps;
        layout?: (make: MASConstraintMaker, view: UIProgressView) => void;
        events?: BaseViewEvents<UIProgressView>;
    }

    interface GalleryProps extends BaseViewProps {
        items: AllViewOptions[];
        page?: number; // 当前页数
        interval?: number; // 自动播放间隔，为 0 表示不播放
        // pageControl?: UIView;
    }

    interface GalleryEvents extends BaseViewEvents<UIGalleryView> {
        changed?: (sender: UIGalleryView) => void;
    }

    interface GalleryOptions extends BaseViewOptions {
        type: "gallery";
        props: GalleryProps;
        layout?: (make: MASConstraintMaker, view: UIGalleryView) => void;
        events?: GalleryEvents;
    }

    interface StepperProps extends BaseViewProps {
        value?: number;
        min?: number;
        max?: number;
        step?: number;
        autorepeat?: boolean; // 响应长按
        continuous?: boolean; // 连续响应事件
    }

    interface StepperEvents extends BaseViewEvents<UIStepperView> {
        changed?: (sender: UIStepperView) => void;
    }

    interface StepperOptions extends BaseViewOptions {
        type: "stepper";
        props: StepperProps;
        layout?: (make: MASConstraintMaker, view: UIStepperView) => void;
        events?: StepperEvents;
    }

    interface TextProps extends ScrollProps {
        text?: string;
        styledText?: string | StyledTextOptions;
        html?: string;
        type?: number; // $kbType
        darkKeyboard?: boolean;
        font?: UIFont;
        textColor?: UIColor;
        align?: number; // $align
        placeholder?: string;
        selectedRange?: JBRange;
        editable?: boolean;
        selectable?: boolean;
        insets?: JBInsets;
        accessoryView?: AllViewOptions;
        keyboardView?: AllViewOptions;
    }

    interface TextEvents<T3 = UITextView> extends ScrollEvents<T3> {
        didBeginEditing?: (sender: T3) => void;
        didEndEditing?: (sender: T3) => void;
        didChange?: (sender: T3) => void;
        didChangeSelection?: (sender: T3) => void;
    }

    interface TextOptions extends BaseViewOptions {
        type: "text";
        props: TextProps;
        layout?: (make: MASConstraintMaker, view: UITextView) => void;
        events?: TextEvents;
    }

    interface ImageProps extends BaseViewProps {
        image?: UIImage;
        src?: string; // url或者本地路径
        source?: {
            url: string,
            placeholder?: UIImage,
            header: Record<string, string>,
        }; //  对图片进行更详细的设定
        symbol?: string; // SF symbols 名称
        data?: NSData;
        icon?: BBFileIcon;
    }

    interface ImageOptions extends BaseViewOptions {
        type: "image";
        props: ImageProps;
        layout?: (make: MASConstraintMaker, view: UIImageView) => void;
        events?: BaseViewEvents<UIImageView>;
    }

    interface VideoProps extends BaseViewProps {
        src: string; // url，如果需要本地路径必须是local://开头
        poster?: string; // 封面图
    }

    interface VideoOptions extends BaseViewOptions {
        type: "video";
        props: VideoProps;
        layout?: (make: MASConstraintMaker, view: UIVideoView) => void;
        events?: BaseViewEvents<UIVideoView>;
    }

    interface ScrollProps extends BaseViewProps {
        contentOffset?: JBPoint;
        contentSize?: JBSize;
        alwaysBounceVertical?: boolean;
        alwaysBounceHorizontal?: boolean;
        pagingEnabled?: boolean;
        scrollEnabled?: boolean;
        showsHorizontalIndicator?: boolean; // 显示横向滚动条
        showsVerticalIndicator?: boolean; // 显示纵向滚动条
        contentInset?: JBInsets;
        indicatorInsets?: JBInsets;
        // tracking?: boolean;
        // dragging?: boolean;
        // decelerating?: boolean;
        keyboardDismissMode?: number; // 键盘收起模式
        zoomEnabled?: boolean; // 以下是为了创建支持双指缩放的图片
        maxZoomScale?: number; // 最大缩放比例，默认2
        doubleTapToZoom?: boolean; // 双击放大，默认true
    }

    interface ScrollEvents<T2 = UIScrollView> extends BaseViewEvents<T2> {
        pulled?: (sender: T2) => void;
        didScroll?: (sender: T2) => void;
        willBeginDragging?: (sender: T2) => void;
        willEndDragging?: (sender: T2, velocity: JBPoint, target: JBPoint) => JBPoint | void;
        didEndDragging?: (sender: T2, decelerate: boolean) => void;
        willBeginDecelerating?: (sender: T2) => void;
        didEndDecelerating?: (sender: T2) => void;
        didEndScrollingAnimation?: (sender: T2) => void;
        didScrollToTop?: (sender: T2) => void;
    }

    interface ScrollOptions extends BaseViewOptions {
        type: "scroll";
        props: ScrollProps;
        layout?: (make: MASConstraintMaker, view: UIScrollView) => void;
        events?: ScrollEvents<UIScrollView>;
    }

    interface StackProps extends BaseViewProps {
        stack: { views: AllViewOptions[] };
        axis?: number; // $stackViewAxis
        distribution?: number; // $stackViewDistribution
        alignment?: number; // $stackViewAlignment
        spacing?: number; // $stackViewSpacing
        baselineRelative?: boolean; // 文档中属性名写错了，不是isBaselineRelative
        layoutMarginsRelative?: boolean; // 文档中属性名写错了，不是isLayoutMarginsRelative
    }

    interface StackOptions extends BaseViewOptions {
        type: "stack";
        props: StackProps;
        layout?: (make: MASConstraintMaker, view: UIStackView) => void;
        events?: BaseViewEvents<UIStackView>;
    }

    interface TabProps extends BaseViewProps {
        items?: string[];
        index?: number; // 初始选中
    }

    interface TabEvents extends BaseViewEvents<UITabView> {
        changed?: (sender: UITabView) => void;
    }

    interface TabOptions extends BaseViewOptions {
        type: "tab";
        props: TabProps;
        layout?: (make: MASConstraintMaker, view: UITabView) => void;
        events?: TabEvents;
    }

    interface MenuProps extends BaseViewProps {
        items?: string[];
        index?: number; // 初始选中
        dynamicWidth?: boolean; // dynamic item width, default is false
    }

    interface MenuEvents extends BaseViewEvents<UIMenuView> {
        changed?: (sender: UIMenuView) => void;
    }


    interface MenuOptions extends BaseViewOptions {
        type: "menu";
        props: MenuProps;
        layout?: (make: MASConstraintMaker, view: UIMenuView) => void;
        events?: MenuEvents;
    }

    interface MapProps extends BaseViewProps {
        location: {
            lat: number;
            lng: number;
        }
    }

    interface MapOptions extends BaseViewOptions {
        type: "map";
        props: MapProps;
        layout?: (make: MASConstraintMaker, view: UIMapView) => void;
        events?: BaseViewEvents<UIMapView>;
    }

    interface WebProps extends BaseViewProps {
        url?: string;
        request?: {
            url: string;
            method?: string;
            headers?: Record<string, string>;
            body?: NSData;
        };
        html?: string;
        text?: string;
        toolbar?: boolean;
        // loading?: boolean;
        // progress?: number;
        // canGoBack?: boolean;
        // canGoForward?: boolean;
        ua?: string;
        scrollEnabled?: boolean;
        bounces?: boolean; // 是否滚动回弹
        transparent?: boolean; // 是否背景透明
        showsProgress?: boolean;
        inlineMedia?: boolean;
        airPlay?: boolean;
        pictureInPicture?: boolean;
        allowsNavigation?: boolean;
        allowsLinkPreview?: boolean;
        script?: string | (() => void);
        style?: string;
    }

    interface WebEvents<T2 = UIWebView> extends BaseViewEvents<T2> {
        didClose?: (sender: T2) => void;
        decideNavigation?: (sender: T2, action: WKNavigationAction) => boolean;
        didStart?: (sender: T2, navigation: WKNavigation) => void;
        didReceiveServerRedirect?: (sender: T2, navigation: WKNavigation) => void;
        didFinish?: (sender: T2, navigation: WKNavigation) => void;
        didFail?: (sender: T2, navigation: WKNavigation, error: NSError | null) => void;
        didSendRequest?: (request: {
            method: string;
            url: string;
            header: Record<string, string>;
            body: any
        }) => void;
        [customEvent: string]: ((...args: any[]) => void) | undefined;
    }

    interface WebOptions extends BaseViewOptions {
        type: "web";
        props: WebProps;
        layout?: (make: MASConstraintMaker, view: UIWebView) => void;
        events?: WebEvents<UIWebView>;
    }

    interface ListProps extends ScrollProps {
        style?: number; // 样式 0 ~ 2
        data?: any;
        template?: {
            props?: BaseViewProps,
            views: AllViewOptions[];
        };
        separatorInset?: JBInsets;
        separatorHidden?: boolean;
        separatorColor?: UIColor;
        header?: AllViewOptions;
        footer?: AllViewOptions;
        rowHeight?: number;
        autoRowHeight?: boolean;
        estimatedRowHeight?: number;
        sectionTitleHeight?: number;
        selectable?: boolean;
        stickyHeader?: boolean;
        reorder?: boolean;
        crossSections?: boolean;
        // hasActiveAction?: boolean;
        actions?: {
            title: string;
            color?: UIColor;
            handler: (sender: UIListView, indexPath: NSIndexPath) => void;
        }[];
    }

    interface ListEvents extends ScrollEvents<UIListView> {
        swipeEnabled?: (sender: UIListView, indexPath: NSIndexPath) => boolean;
        rowHeight?: (sender: UIListView, indexPath: NSIndexPath) => number;
        sectionTitleHeight?: (sender: UIListView, section: number) => number;
        didSelect?: (sender: UIListView, indexPath: NSIndexPath, data: any) => void;
        didLongPress?: (sender: UIListView, indexPath: NSIndexPath, data: any) => void;
        forEachItem?: (sender: UIListView, indexPath: NSIndexPath) => void;
        reorderBegan?: (indexPath: NSIndexPath) => void;
        reorderMoved?: (from: NSIndexPath, to: NSIndexPath) => void;
        reorderFinished?: (data: any) => void;
        canMoveItem?: (sender: UIListView, indexPath: NSIndexPath) => boolean;
        didReachBottom?: (sender: UIListView) => void;
    }


    interface ListOptions extends BaseViewOptions {
        type: "list";
        props: ListProps;
        layout?: (make: MASConstraintMaker, view: UIListView) => void;
        events?: ListEvents;
    }

    interface MatrixProps extends ScrollProps {
        data: string[] | object[];
        template: {
            props?: BaseViewProps,
            views: AllViewOptions[];
        };
        spacing?: number;
        itemSize?: JSSize;
        autoItemSize?: boolean;
        estimatedItemSize?: JSSize;
        columns?: number;
        itemHeight?: number;
        square?: boolean;
        direction?: number; // $scrollDirection
        selectable?: boolean;
        waterfall?: boolean;
        header?: AllViewOptions;
        footer?: AllViewOptions;
        reorder?: boolean;
    }

    interface MatrixEvents extends ScrollEvents<UIMatrixView> {
        didSelect?: (sender: UIMatrixView, indexPath: NSIndexPath, data: any) => void;
        didLongPress?: (sender: UIMatrixView, indexPath: NSIndexPath, data: any) => void;
        forEachItem?: (sender: UIMatrixView, indexPath: NSIndexPath) => void;
        highlighted?: (sender: UIMatrixView) => void;
        itemSize?: (sender: UIMatrixView, indexPath: NSIndexPath) => void;
        reorderBegan?: (indexPath: NSIndexPath) => void;
        reorderMoved?: (from: NSIndexPath, to: NSIndexPath) => void;
        reorderFinished?: (data: any) => void;
        canMoveItem?: (sender: UIMatrixView, indexPath: NSIndexPath) => boolean;
        didReachBottom?: (sender: UIMatrixView) => void;
    }

    interface MatrixOptions extends BaseViewOptions {
        type: "matrix";
        props: MatrixProps;
        layout?: (make: MASConstraintMaker, view: UIMatrixView) => void;
        events?: MatrixEvents;
    }

    interface BlurProps extends BaseViewProps {
        style?: number; // $blurStyle
    }

    interface BlurOptions extends BaseViewOptions {
        type: "blur";
        props: BlurProps;
        layout?: (make: MASConstraintMaker, view: UIBlurView) => void;
        events?: BaseViewEvents<UIBlurView>;
    }

    interface GradientProps extends BaseViewProps {
        colors: UIColor[];
        locations?: number[];
        startPoint?: JBPoint;
        endPoint?: JBPoint;
    }

    interface GradientOptions extends BaseViewOptions {
        type: "gradient";
        props: GradientProps;
        layout?: (make: MASConstraintMaker, view: UIGradientView) => void;
        events?: BaseViewEvents<UIGradientView>;
    }

    interface DatePickerProps extends BaseViewProps {
        date?: Date;
        min?: Date;
        max?: Date;
        mode?: number; // 参考Apple文档
        interval?: number;
    }

    interface DatePickerEvents extends BaseViewEvents<UIDatePickerView> {
        changed?: (sender: UIDatePickerView) => void;
    }

    interface DatePickerOptions extends BaseViewOptions {
        type: "date-picker";
        props: DatePickerProps;
        layout?: (make: MASConstraintMaker, view: UIDatePickerView) => void;
        events?: DatePickerEvents;
    }

    interface PickerProps extends BaseViewProps {
        items: object;
    }

    interface PickerEvents extends BaseViewEvents<UIPickerView> {
        changed?: (sender: UIPickerView) => void;
    }

    interface PickerOptions extends BaseViewOptions {
        type: "picker";
        props: PickerProps;
        layout?: (make: MASConstraintMaker, view: UIPickerView) => void;
        events?: PickerEvents;
    }

    interface CanvasEvents extends BaseViewEvents<UICanvasView> {
        draw?: (view: UICanvasView, ctx: BBCanvasContext) => void;
    }

    interface CanvasOptions extends BaseViewOptions {
        type: "canvas";
        props: BaseViewProps;
        layout?: (make: MASConstraintMaker, view: UICanvasView) => void;
        events?: CanvasEvents;
    }

    interface MarkdownProps extends BaseViewProps {
        content?: string;
        style?: string;
        scrollEnabled?: boolean;
    }

    interface MarkdownOptions extends BaseViewOptions {
        type: "markdown";
        props: MarkdownProps;
        layout?: (make: MASConstraintMaker, view: UIMarkdownView) => void;
        events?: BaseViewEvents<UIMarkdownView>;
    }

    interface LottieProps extends BaseViewProps {
        json?: { [key: string]: any };
        data?: NSData;
        src?: string; // url或者本地路径
        // playing?: boolean;
        loop?: boolean;
        autoReverse?: boolean; // 是否自动反转
        progress?: number; // 播放进度
        frameIndex?: number; // 播放帧数
        speed?: number;
        // duration?: number;
    }

    interface LottieOptions extends BaseViewOptions {
        type: "lottie";
        props: LottieProps;
        layout?: (make: MASConstraintMaker, view: UILottieView) => void;
        events?: BaseViewEvents<UILottieView>;
    }

    interface ChartProps extends WebProps {
        options?: object; // options 支持的参数请参考 ECharts 文档
    }

    interface ChartEvents extends WebEvents<UIChartView> {
        rendered?: () => void;
        finished?: () => void;
    }

    interface ChartOptions extends BaseViewOptions {
        type: "chart";
        props: ChartProps;
        layout?: (make: MASConstraintMaker, view: UIChartView) => void;
        events?: ChartEvents;
    }

    interface CodeProps extends TextProps {
        language?: string;
        theme?: string;
        darkKeyboard?: boolean; // 是否使用黑色键盘
        adjustInsets?: boolean; // 是否根据键盘调整 insets
        lineNumbers?: boolean; // 是否显示行号
        invisibles?: boolean; // 是否显示不可见字符
        linePadding?: number; // 行高
        keys?: string[]; // 自定义键盘，与accessoryView冲突
    }

    interface CodeOptions extends BaseViewOptions {
        type: "code";
        props: CodeProps;
        layout?: (make: MASConstraintMaker, view: UICodeView) => void;
        events?: TextEvents<UICodeView>;
    }

    interface RuntimeProps extends BaseViewProps {
        view?: any; // 此处是使用 Runtime 生成的 view，无法定义
    }

    interface RuntimeOptions extends BaseViewOptions {
        type: "runtime";
        props: RuntimeProps;
        layout?: (make: MASConstraintMaker, view: UIView) => void;
        events?: BaseViewEvents;
    }

    type AllViewOptions = ViewOptions | LabelOptions | ButtonOptions | InputOptions | SliderOptions
        | SwitchOptions | SpinnerOptions | ProgressOptions | GalleryOptions | StepperOptions
        | TextOptions | ImageOptions | VideoOptions | ScrollOptions | StackOptions
        | TabOptions | MenuOptions | MapOptions | WebOptions | ListOptions | MatrixOptions
        | BlurOptions | GradientOptions | DatePickerOptions | PickerOptions | CanvasOptions
        | MarkdownOptions | LottieOptions | ChartOptions | CodeOptions | RuntimeOptions;

    type AllViewTypes = "view" | "label" | "button" | "input" | "slider" | "switch" | "spinner" | "progress"
        | "gallery" | "stepper" | "text" | "image" | "video" | "scroll" | "stack" | "tab" | "menu"
        | "map" | "web" | "list" | "matrix" | "blur" | "gradient" | "date-picker" | "picker" | "canvas"
        | "markdown" | "lottie" | "chart" | "code" | "runtime";

    interface UIAnimationOptions {
        duration: number;
        delay?: number;
        damping?: number;
        velocity?: number;
        options?: number;
        animation?: () => void;
        completion?: () => void;
    }

    interface UIAlertOptions {
        title?: string;
        message?: string;
        actions?: {
            title: string;
            disabled?: boolean;
            style?: number;
            handler?: () => void;
        }[]
    }

    interface UIAlertNoHandlerOptions {
        title?: string;
        message?: string;
        actions?: {
            title: string;
            disabled?: boolean;
            style?: number;
        }[]
    }

    interface UIMenuOptions {
        items: string[];
        handler: (title: string, index: number) => void;
        finished?: (cancelled: boolean) => void;
    }

    interface UIPopoverSimpleOptions {
        sourceView: AllUIView;
        sourceRect?: JBRect; // sender.bounds by default
        directions?: number; // $popoverDirection.up by default
        size?: JSSize; // fits content by default
        items: string[];
        dismissed?: () => void;
    }

    interface UIPopoverOptions {
        sourceView: AllUIView;
        sourceRect?: JBRect; // sender.bounds by default
        directions?: number; // $popoverDirection.any by default
        size?: JSSize; // fits screen width by default
        views: AllViewOptions[];
    }
}

interface Ui {
    render(options: string | {
        props?: UiTypes.RootViewPrefs;
        views: UiTypes.AllViewOptions[];
        events?: UiTypes.RootViewEvents;
    }): void;
    push(options: string | {
        props?: UiTypes.RootViewPrefs;
        views: UiTypes.AllViewOptions[];
        events?: UiTypes.RootViewEvents;
    }): void;
    animate(args: UiTypes.UIAnimationOptions): void;
    pop(): void;
    popToRoot(): void;
    get<T extends AllUIView>(id: string): T;
    alert(options: UiTypes.UIAlertOptions | string): void;
    alert(options: UiTypes.UIAlertNoHandlerOptions): Promise<{ title: string; index: number }>;
    action(options: UiTypes.UIAlertOptions | string): void;
    action(options: UiTypes.UIAlertNoHandlerOptions): Promise<{ title: string; index: number }>;
    menu(options: UiTypes.UIMenuOptions): void;
    menu(options: Omit<UiTypes.UIMenuOptions, "handler">): Promise<{ title: string; index: number }>;
    popover(options: UiTypes.UIPopoverSimpleOptions): Promise<{ title: string; index: number }>;
    popover(options: UiTypes.UIPopoverOptions): { dismiss: () => void };
    toast(message: string, time?: number): void;
    clearToast(): void;
    success(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    loading(flagOrMessage: boolean | string): void;
    progress(percent: number, message?: string): void;
    preview(options: {
        title: string;
        url?: string;
        html?: string;
        text?: string;
    }): void;
    create(options: UiTypes.ViewOptions): UIView;
    create(options: UiTypes.LabelOptions): UILabelView;
    create(options: UiTypes.ButtonOptions): UIButtonView;
    create(options: UiTypes.InputOptions): UIInputView;
    create(options: UiTypes.SliderOptions): UISliderView;
    create(options: UiTypes.SwitchOptions): UISwitchView;
    create(options: UiTypes.SpinnerOptions): UISpinnerView;
    create(options: UiTypes.ProgressOptions): UIProgressView;
    create(options: UiTypes.GalleryOptions): UIGalleryView;
    create(options: UiTypes.StepperOptions): UIStepperView;
    create(options: UiTypes.TextOptions): UITextView;
    create(options: UiTypes.ImageOptions): UIImageView;
    create(options: UiTypes.VideoOptions): UIVideoView;
    create(options: UiTypes.ScrollOptions): UIScrollView;
    create(options: UiTypes.StackOptions): UIStackView;
    create(options: UiTypes.TabOptions): UITabView;
    create(options: UiTypes.MenuOptions): UIMenuView;
    create(options: UiTypes.MapOptions): UIMapView;
    create(options: UiTypes.WebOptions): UIWebView;
    create(options: UiTypes.ListOptions): UIListView;
    create(options: UiTypes.MatrixOptions): UIMatrixView;
    create(options: UiTypes.BlurOptions): UIBlurView;
    create(options: UiTypes.GradientOptions): UIGradientView;
    create(options: UiTypes.DatePickerOptions): UIDatePickerView;
    create(options: UiTypes.PickerOptions): UIPickerView;
    create(options: UiTypes.CanvasOptions): UICanvasView;
    create(options: UiTypes.MarkdownOptions): UIMarkdownView;
    create(options: UiTypes.LottieOptions): UILottieView;
    create(options: UiTypes.ChartOptions): UIChartView;
    create(options: UiTypes.CodeOptions): UICodeView;
    create(options: UiTypes.RuntimeOptions): AllUIView;
    window: UIView; // 此处实际效果与文档不符，获取的是RootView
    controller: BBRenderVC;
    title: string;
    selectIcon(): Promise<string>;
}

declare const $ui: Ui;