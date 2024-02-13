
interface JBRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface JBSize {
    width: number;
    height: number;
}

interface JBPoint {
    x: number;
    y: number;
}

interface JBInsets {
    top: number;
    left: number;
    bottom: number;
    right: number;
}

interface JBRange {
    location: number;
    length: number;
}

interface JBBasicValue {
    jsValue: any;
    ocValue: any;
    invoke(...args: any[]): any;
}

interface NSError extends JBBasicValue {
    code: number;
    domain: string;
    userInfo: object;
    localizedDescription: string;
    localizedFailureReason: string;
    localizedRecoverySuggestion: string;
}

interface MASConstraintMaker extends JBBasicValue {
    // 边距（Margins）
    leftMargin: MASViewConstraint;
    rightMargin: MASViewConstraint;
    topMargin: MASViewConstraint;
    bottomMargin: MASViewConstraint;
    leadingMargin: MASViewConstraint;
    trailingMargin: MASViewConstraint;
    centerXWithinMargins: MASViewConstraint;
    centerYWithinMargins: MASViewConstraint;

    // 中心点（Center）
    centerX: MASViewConstraint;
    centerY: MASViewConstraint;
    center: MASCompositeConstraint;

    // 尺寸（Size）
    width: MASViewConstraint;
    height: MASViewConstraint;
    size: MASCompositeConstraint;

    // 边缘（Edges）
    left: MASViewConstraint;
    right: MASViewConstraint;
    top: MASViewConstraint;
    bottom: MASViewConstraint;
    leading: MASViewConstraint;
    trailing: MASViewConstraint;
    edges: MASCompositeConstraint;

    // 基线（Baseline）
    baseline: MASViewConstraint;
    firstBaseline: MASViewConstraint;
    lastBaseline: MASViewConstraint;

    // 其他属性
    updateExisting: boolean;
    removeExisting: boolean;
    attributes: Function;
}

interface MASViewConstraint extends JBBasicValue {
    // 布局边距（Margins）相关属性
    leftMargin: MASViewConstraint;
    rightMargin: MASViewConstraint;
    topMargin: MASViewConstraint;
    bottomMargin: MASViewConstraint;
    leadingMargin: MASViewConstraint;
    trailingMargin: MASViewConstraint;

    // 对齐（Alignment）相关属性
    left: MASViewConstraint;
    right: MASViewConstraint;
    top: MASViewConstraint;
    bottom: MASViewConstraint;
    leading: MASViewConstraint;
    trailing: MASViewConstraint;
    centerX: MASViewConstraint;
    centerY: MASViewConstraint;
    firstBaseline: MASViewConstraint;
    lastBaseline: MASViewConstraint;
    baseline: MASViewConstraint;

    // 中心对齐（Center Alignment within Margins）相关属性
    centerXWithinMargins: MASViewConstraint;
    centerYWithinMargins: MASViewConstraint;

    // 尺寸（Size）相关属性
    width: MASViewConstraint;
    height: MASViewConstraint;

    // 优先级（Priority）相关属性
    priority: (value: number) => MASViewConstraint;
    priorityToLow: MASViewConstraint;
    priorityToMedium: MASViewConstraint;
    priorityToHigh: MASViewConstraint;

    // 约束操作（Constraint Operations）相关属性
    equalTo: (target: number | MASViewConstraint | MASViewAttribute | UIView) => MASViewConstraint;
    lessThanOrEqualTo: (target: number | MASViewConstraint | MASViewAttribute | UIView) => MASViewConstraint;
    greaterThanOrEqualTo: (target: number | MASViewConstraint | MASViewAttribute | UIView) => MASViewConstraint;
    offset: (value: number) => MASViewConstraint;
    inset: (value: number) => MASViewConstraint;
    insets: (value: JBInsets) => MASViewConstraint;
    centerOffset: (value: number) => MASViewConstraint;
    valueOffset: (value: number) => MASViewConstraint;
    sizeOffset: (value: JBSize) => MASViewConstraint; // 根据实际情况定义更具体的类型
    multipliedBy: (value: number) => MASViewConstraint;
    dividedBy: (value: number) => MASViewConstraint;

    // 链式操作（Chaining Operations）相关属性
    and: MASViewConstraint;
    with: MASViewConstraint;
}

interface MASCompositeConstraint extends JBBasicValue {
    // Positioning and Alignment
    leading: MASCompositeConstraint;
    trailing: MASCompositeConstraint;
    left: MASCompositeConstraint;
    right: MASCompositeConstraint;
    top: MASCompositeConstraint;
    bottom: MASCompositeConstraint;
    centerX: MASCompositeConstraint;
    centerY: MASCompositeConstraint;
    baseline: MASCompositeConstraint;
    firstBaseline: MASCompositeConstraint;
    lastBaseline: MASCompositeConstraint;

    // Margin Alignment
    leadingMargin: MASCompositeConstraint;
    trailingMargin: MASCompositeConstraint;
    leftMargin: MASCompositeConstraint;
    rightMargin: MASCompositeConstraint;
    topMargin: MASCompositeConstraint;
    bottomMargin: MASCompositeConstraint;
    centerXWithinMargins: MASCompositeConstraint;
    centerYWithinMargins: MASCompositeConstraint;

    // Dimension Constraints
    width: MASCompositeConstraint;
    height: MASCompositeConstraint;

    // Priority
    priority: MASCompositeConstraint;
    priorityToHigh: MASCompositeConstraint;
    priorityToMedium: MASCompositeConstraint;
    priorityToLow: MASCompositeConstraint;

    // Value Setting Methods (taking any value)
    inset: (value: number) => MASCompositeConstraint;
    dividedBy: (value: number) => MASCompositeConstraint;
    multipliedBy: (value: number) => MASCompositeConstraint;
    centerOffset: (value: number) => MASCompositeConstraint;
    offset: (value: number) => MASCompositeConstraint;
    insets: (value: JBInsets) => MASCompositeConstraint;
    valueOffset: (value: number) => MASCompositeConstraint;
    sizeOffset: (value: JBSize) => MASCompositeConstraint;

    // Relational Constraints
    equalTo: (value: MASCompositeConstraint | JBPoint | JBSize | JBInsets | UIView) => MASCompositeConstraint;
    greaterThanOrEqualTo: (value: MASCompositeConstraint | JBPoint | JBSize | JBInsets | UIView) => MASCompositeConstraint;
    lessThanOrEqualTo: (value: MASCompositeConstraint | JBPoint | JBSize | JBInsets | UIView) => MASCompositeConstraint;

    // Others
    and: MASCompositeConstraint;
    with: MASCompositeConstraint;
}

interface UIView extends JBBasicValue {
    // 唯一标识与基础属性
    id: string;
    __clsName: string; // 保留内部属性
    theme: string;

    // 尺寸与位置属性
    bounds: { y: number; x: number; width: number; height: number; };
    center: { x: number; y: number; };
    size: { width: number; height: number; };
    frame: { y: number; x: number; width: number; height: number; };
    intrinsicSize: { width: number; height: number; };
    flex: string;

    // 边距与布局属性
    top: MASViewAttribute;
    bottom: MASViewAttribute;
    left: MASViewAttribute;
    right: MASViewAttribute;
    leading: MASViewAttribute;
    trailing: MASViewAttribute;
    centerX: MASViewAttribute;
    centerY: MASViewAttribute;
    width: MASViewAttribute;
    height: MASViewAttribute;
    topMargin: MASViewAttribute;
    bottomMargin: MASViewAttribute;
    leftMargin: MASViewAttribute;
    rightMargin: MASViewAttribute;
    leadingMargin: MASViewAttribute;
    trailingMargin: MASViewAttribute;
    safeArea: MASViewAttribute;
    safeAreaTop: MASViewAttribute;
    safeAreaBottom: MASViewAttribute;
    safeAreaLeft: MASViewAttribute;
    safeAreaRight: MASViewAttribute;
    safeAreaLeading: MASViewAttribute;
    safeAreaTrailing: MASViewAttribute;
    safeAreaCenterX: MASViewAttribute;
    safeAreaCenterY: MASViewAttribute;
    safeAreaWidth: MASViewAttribute;
    safeAreaHeight: MASViewAttribute;
    centerXWithinMargins: MASViewAttribute;
    centerYWithinMargins: MASViewAttribute;
    baseline: MASViewAttribute;
    lastBaseline: MASViewAttribute;
    firstBaseline: MASViewAttribute;

    // 视图样式属性
    bgcolor: UIColor;
    borderColor: UIColor;
    tintColor: UIColor;
    borderWidth: number;
    cornerRadius: number; // 圆角半径
    alpha: number;
    contentMode: number; // 注意：contentMode是数字类型
    clipsToBounds: boolean; // 是否裁剪子view
    hidden: boolean;
    opaque: boolean; // 是否不透明
    smoothCorners: boolean; // 圆角是否使用平滑曲线
    smoothRadius: number;
    radius: number;
    info: object; // 用于绑定一些信息，例如上下文参数，可写入自定义内容
    // circular: boolean; // 文档错误，该属性在UIView中不存在，属于只写属性

    // 触摸与交互属性
    exclusiveTouch: boolean;
    multipleTouchEnabled: boolean;
    userInteractionEnabled: boolean;

    // 无障碍
    isAccessibilityElement: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessibilityValue?: string;
    accessibilityCustomActions?: UIAccessibilityCustomAction[]

    // 动画与效果函数
    readonly animator: JHChainableAnimator;
    // bounce: Function;

    // 视图操作与事件处理函数
    snapshot: UIImage;
    add(view: UIView | UiTypes.AllViewOptions): void;
    remove(): void;
    get(key: string): UIView;
    insertAbove(view: UIView, other: UIView): void;
    insertBelow(view: UIView, other: UIView): void;
    insertAtIndex(view: UIView, index: number): void;
    moveToFront(): void;
    moveToBack(): void;
    sizeToFit(): void;
    scale(scale: number): void;
    snapshotWithScale(scale: number): UIImage;
    rotate(angle: number): void;
    whenTapped(handler: (sender: UIView) => void): void;
    whenDoubleTapped(handler: (sender: UIView) => void): void;
    whenTouched(args: {
        touches: number;
        taps: number;
        handler: (sender: UIView) => void;
    }): void;
    addEventHandler(args: {
        events: number;
        handler: (sender: UIView) => void;
    }): void; // 此方法只能用于 button, text, input 等本身就支持事件响应的 UI controls
    removeEventHandlers(events: number): void;
    // startLoading: Function;
    // stopLoading: Function;
    layout(callback: (make: MASConstraintMaker, view: UIView) => void): void;
    relayout(): void;
    updateLayout(callback: (make: MASConstraintMaker, view: UIView) => void): void;
    remakeLayout(callback: (make: MASConstraintMaker, view: UIView) => void): void;
    setNeedsLayout(): void;
    layoutIfNeeded(): void;
    // valueForKey: Function;
    // setValueForKey: Function;
    // valueForKeyPath: Function;
    // setValueForKeyPath: Function;

    // 子视图与层级关系
    readonly super: UIView;
    readonly prev: UIView;
    readonly next: UIView;
    readonly window: AppWindow; // 需要完全加载后才可用
    readonly views: UIView[];
}

interface AppWindow extends Omit<UIView, "id" | "bgcolor"> {
    // 没有id和bgcolor属性
}

interface UILabelView extends UIView {
    text: string;
    styledText?: UiTypes.StyledTextOptions;
    autoFontSize: boolean;
    lines: number;
    align: number;
    font: UIFont;
    shadowOffset: JBPoint;
    textColor: UIColor;
    shadowColor?: UIColor;
}

interface UIButtonView extends UIView {
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
    type: number; // $btnType
    menu?: UIMenu;

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
}

interface UIInputView extends UIView {
    type: number; // $kbType
    darkKeyboard?: boolean;
    text: string;
    styledText?: UiTypes.StyledTextOptions;
    textColor: UIColor;
    font: UIFont;
    align: number; // $align
    placeholder?: string;
    clearsOnBeginEditing: boolean; // 开始时清除文本
    autoFontSize: boolean; // 是否动态调整字体大小
    editing: boolean; // 是否正在编辑
    secure: boolean; // 是否密码框

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    returnKeyType: number;  // 以下属性文档上缺少但实际存在，意义不明
    tracking: boolean;
    selected: boolean;
    highlighted: boolean;
    touchInside: boolean;
    contentVerticalAlignment: number;
    contentHorizontalAlignment: number;
    effectiveContentHorizontalAlignment: number;
    clearButtonMode: number;
    state: number;

    focus(): void; // 获取焦点，弹出键盘
    blur(): void; // 模糊焦点，隐藏键盘
}

interface UISliderView extends UIView {
    value: number;
    min: number;
    max: number;
    continuous: boolean;
    minColor?: UIColor;
    maxColor?: UIColor;
    thumbColor?: UIColor;

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UISwitchView extends UIView {
    on: boolean;
    onColor: UIColor;
    thumbColor?: UIColor;

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UISpinnerView extends UIView {
    loading: boolean; // 是否加载中
    color: UIColor;
    // style?: number; // 无法复现，可能文档错误或API已废弃
    start(): void;
    stop(): void;
    toggle(): void;
}

interface UIProgressView extends UIView {
    value: number;
    progressColor?: UIColor;
    trackColor: UIColor;
}

interface UIGalleryView extends UIScrollView {
    itemViews: AllUIView[];
    page: number;
    interval: number;
    pageControl: UIPageControl;

    viewWithIndex(index: number): UIView;
    scrollToPage(index: number): void;
}

interface UIStepperView extends UIView {
    value: number;
    min: number;
    max: number;
    step: number;
    autorepeat: boolean;
    continuous: boolean;

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
    wraps: boolean;
}

interface UITextView extends UIScrollView {
    text: string;
    styledText?: string | UiTypes.StyledTextOptions;
    html: string;
    type: number; // $kbType
    darkKeyboard: boolean;
    font: UIFont;
    textColor: UIColor;
    align: number; // $align
    placeholder: string;
    selectedRange: JBRange;
    editable: boolean;
    selectable: boolean;
    // insets?: JBInsets; // 文档错误，不可读
    accessoryView?: UIView;
    keyboardView?: UIView;

    focus(): void; // 获取焦点，弹出键盘
    blur(): void; // 模糊焦点，隐藏键盘

    returnKeyType: number; // 文档上缺少但实际存在
}

interface UIImageView extends UIView {
    image: UIImage;
    data: NSData;
    src?: string; // url或者本地路径
    source?: {
        url: string,
        placeholder?: UIImage,
        header?: Record<string, string>,
    }; //  对图片进行更详细的设定
    symbol?: string; // SF symbols 名称
    icon?: BBFileIcon;

    highlighted: boolean; // 文档上缺少但实际存在
}

interface UIVideoView extends UIWebView {
    src: string; // url，如果需要本地路径必须是local://开头
    poster?: string; // 封面图

    pause(): void;
    play(): void;
    toggle(): void;

}

interface UIScrollView extends UIView {
    contentOffset: JBPoint;
    contentSize: JBSize;
    alwaysBounceVertical: boolean;
    alwaysBounceHorizontal: boolean;
    pagingEnabled: boolean;
    scrollEnabled: boolean;
    showsHorizontalIndicator: boolean; // 显示横向滚动条
    showsVerticalIndicator: boolean; // 显示纵向滚动条
    // contentInset?: JBInsets; // 文档中存在，但实测失效
    // indicatorInsets?: JBInsets; // 文档中存在，但实测失效

    keyboardDismissMode: number; // 键盘收起模式
    zoomEnabled: boolean; // 以下是为了创建支持双指缩放的图片
    maxZoomScale: number; // 最大缩放比例，默认2
    zoomScale: number; // 文档上缺少但实际存在
    doubleTapToZoom: boolean; // 双击放大，默认true

    tracking: boolean;
    dragging: boolean;
    decelerating: boolean;

    beginRefreshing(): void;
    endRefreshing(): void;
    resize(): void;
    updateZoomScale(): void;
    scrollToOffset(point: JBPoint): void;
    zoomToRect: Function; // 文档上缺少但实际存在
    setZoomScale: Function; // 文档上缺少但实际存在
    beginFetchingMore(): void;
    endFetchingMore(): void;

    directionalLockEnabled: boolean; // 文档上缺少但实际存在
    delaysContentTouches: boolean; // 文档上缺少但实际存在
    indicatorStyle: number; // 文档上缺少但实际存在
}

interface UIStackView extends UIView {
    stack: BBStackViewStack;
    axis: number; // $stackViewAxis
    distribution: number; // $stackViewDistribution
    alignment: number; // $stackViewAlignment
    spacing: number; // $stackViewSpacing
    baselineRelative: boolean;
    layoutMarginsRelative: boolean;
}

interface UITabView extends UIView {
    items: string[];
    index: number;

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
    disable: Function;
    enable: Function;
}

interface UIMenuView extends UIView {
    items: string[];
    index: number;
    dynamicWidth?: boolean;

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UIMapView extends UIView {
    location?: {
        lat: number;
        lng: number;
    }
}

interface UIWebView extends UIView {
    title: string;
    url: string;
    request?: {
        url: string;
        method?: string;
        headers?: Record<string, string>;
        body?: NSData;
    };
    toolbar: boolean;
    loading: boolean;
    progress: number;
    canGoBack: boolean;
    canGoForward: boolean;
    ua: string;
    scrollEnabled: boolean;
    bounces: boolean; // 是否滚动回弹
    transparent: boolean; // 是否背景透明
    allowsNavigation: boolean;
    allowsLinkPreview: boolean;

    goBack(): void;
    goForward(): void;
    reload(): void;
    reloadFromOrigin(): void;
    stopLoading(): void;
    eval(args: {
        script: text;
        handler: (result: any, error: NSError) => void;
    }): void;
    exec(script: string): Promise<{ result: any; error: NSError }>;
    notify(args: {
        event: string;
        message: object;
    }): void;

    scrollView: UIScrollView; // 文档上缺少但实际存在
    pageZoom: number; // 文档上缺少但实际存在
}

interface UIListView extends UIScrollView {
    // style?: number; // 不可读
    data: string[] | object[];
    // template // 不可读
    // separatorInset?: JBInsets; // 不可读
    separatorHidden: boolean;
    separatorColor: UIColor;
    header: UIView;
    footer: UIView;
    // rowHeight?: number; // 不可读
    // autoRowHeight?: boolean; // 不可读
    // estimatedRowHeight?: number; // 不可读
    // sectionTitleHeight?: number; // 不可读
    selectable: boolean;
    // stickyHeader?: boolean; // 不可读
    reorder: boolean;
    crossSections: boolean;
    hasActiveAction: boolean; // 是否正在使用 action
    // actions // 不可读

    object(indexPath: NSIndexPath): object; // 返回在 indexPath 位置的数据
    insert(args: {
        // indexPath 和 index 可选其一，value 要符合 data 元素的定义
        indexPath?: NSIndexPath;
        index?: number;
        value: object
    }): void; // 插入新的数据
    delete(indexPathOrIndex: NSIndexPath | number): void; // 删除指定位置的数据
    cell(indexPath: NSIndexPath): UIView; // 返回在 indexPath 位置的 cell
    setEditing(editing: boolean): void; // 结束 list 划出的状态
    scrollTo(args: {
        indexPath: NSIndexPath;
        animated?: boolean;
    }): void; // 滚动到指定位置
}

interface UIMatrixView extends UIScrollView {
    data: string[] | object[];
    // template // 不可读
    // spacing?: number; // 不可读
    // itemSize?: JSSize; // 不可读
    // autoItemSize?: boolean; // 不可读
    // estimatedItemSize?: JSSize; // 不可读
    // columns?: number; // 不可读
    // itemHeight?: number; // 不可读
    // square?: boolean; // 不可读
    // direction?: number; // 不可读
    selectable: boolean;
    // waterfall?: boolean; // 不可读
    // header // 与UIListView不同，header 属性不可读
    // footer // 与UIListView不同，footer 属性不可读
    reorder: boolean;
    // actions // 不可读

    object(indexPath: NSIndexPath): object; // 返回在 indexPath 位置的数据
    insert(args: {
        // indexPath 和 index 可选其一，value 要符合 data 元素的定义
        indexPath?: NSIndexPath;
        index?: number;
        value: object
    }): void; // 插入新的数据
    delete(indexPathOrIndex: NSIndexPath | number): void; // 删除指定位置的数据
    cell(indexPath: NSIndexPath): UIView; // 返回在 indexPath 位置的 cell
    scrollTo(args: {
        indexPath: NSIndexPath;
        animated?: boolean;
    }): void; // 滚动到指定位置
}

interface UIBlurView extends UIView { }

interface UIGradientView extends UIView {
    colors: UIColor[];
    locations?: number[];
    startPoint: JBPoint;
    endPoint: JBPoint;
}

interface UIDatePickerView extends UIView {
    date: Date;
    min?: Date;
    max?: Date;
    mode: number;
    interval: number;

    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UIPickerView extends UIView {
    items: object[];
    selectedRows: number[];
    data: string[];
}

interface UICanvasView extends UIView { }

interface UIMarkdownView extends UIView {
    content: string;
    style: string;
    scrollEnabled: boolean;
    webView: UIWebView;

    baseURL: string; // 文档上缺少但实际存在
}

interface UILottieView extends UIView {
    json: object; // 只写属性，可用于加载 Lottie 动画
    data: NSData; // 只写属性，可用于加载 Lottie 动画
    src: string; // 文档错误，并非只写属性
    playing: boolean;
    loop: boolean;
    autoReverse: boolean;
    progress: number | null;
    frameIndex: number;
    speed: number;
    duration: number | null;

    play(args: {
        fromFrame?: number;
        toFrame?: number;
        fromProgress?: number;
        toProgress?: number;
        handler: (finished: boolean) => void;
    }): void;
    play(args: {
        fromFrame?: number;
        toFrame?: number;
        fromProgress?: number;
        toProgress?: number;
    }): Promise<boolean>;
    pause(): void;
    stop(): void;
    update(): void;
    progressForFrame(progress: number): number;
    frameForProgress(progress: number): number;

    shouldRasterize: false; // 以下属性文档上缺少但实际存在，意义不明
    cacheEnable: false;
    model: LOTComposition;
}

interface UIChartView extends UIWebView {
    render(data: object): void;
    dispatchAction(data: object): void;
    getWidth(): Promise<number>;
    getWidth(handler: (width: number) => void): void;
    getHeight(): Promise<number>;
    getHeight(handler: (height: number) => void): void;
    getOption(): Promise<object>;
    getOption(handler: (option: object) => void): void;
    resize(size: JBSize): void;
    showLoading(): void;
    hideLoading(): void;
    clear(): void;
}

interface UICodeView extends UITextView {
    // language?: string; // 不可读
    // theme: string; UIView中有theme属性，但含义改变，指编辑器主题
    // adjustInsets?: boolean; // 不可读
    // lineNumbers?: boolean; // 不可读
    // invisibles?: boolean; // 不可读
    // linePadding?: number; // 不可读
    // keys?: string[]; // 不可读

    accessoryView: UIView; // 自定义键盘
}

// 不存在UIRuntimeView，因为Runtime渲染出来就是 Runtime 生成的组件本身

interface UIPageControl extends UIView {
    enabled: boolean; // 文档上缺少但实际存在，表示是否可用
    touchInside: boolean; // 以下属性文档上缺少但实际存在，意义不明
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

type AllUIView = UILabelView | UIButtonView | UIInputView | UISliderView | UISwitchView 
| UISpinnerView | UIProgressView | UIGalleryView | UIStepperView | UITextView | UIImageView 
| UIVideoView | UIScrollView | UIStackView | UITabView | UIMenuView | UIMapView | UIWebView 
| UIListView | UIMatrixView | UIBlurView | UIGradientView | UIDatePickerView | UIPickerView 
| UICanvasView | UIMarkdownView | UILottieView | UIChartView | UICodeView | UIPageControl;

interface BBStackViewStack extends JBBasicValue {
    __clsName: string;
    views: UIView[],
    add(view: UIView): void; // 不能添加View定义
    insert(view: UIView, atIndex: number): void;
    remove(view: UIView): void;
    setSpacingAfterView(view: UIView, spacing: number): void;
    spacingAfterView(view: UIView): number;
}

interface BBRenderVC extends JBBasicValue {
    dismiss(): void;
    view: AllUIView[];
    __clsName: string;
}

interface MASViewAttribute extends JBBasicValue {
    __clsName: string;
    // 根据实际情况定义类型
}

interface UIColor extends JBBasicValue {
    hexCode: string;
    components: {
        red: number;
        alpha: number;
        blue: number;
        green: number;
    };
    __clsName: string;
}

interface JHChainableAnimator extends JBBasicValue {
    // 极为复杂，但此功能本身已废弃，接口不再整理
}

interface NSIndexPath extends JBBasicValue {
    section: number;
    row: number;
    item: number;
    __clsName: string;
}


interface NSData extends JBBasicValue {
    string?: string;
    image?: UIImage;
    append: Function;
    subdata: Function;
    fileName: string;
    byteArray: number[];
    isGzipped: boolean;
    __clsName: string;
    imageWithScale: Function;
    gzipped: NSData;
    gunzipped: NSData;
    info: {
        size: number;
        mimeType: string;
    };
}

interface UIImage extends JBBasicValue {
    averageColor: UIColor;
    scale: number;
    orientation: number;
    alwaysTemplate: UIImage; // 返回一个使用 template 模式渲染的图片
    jpg: (compression: number) => NSData;
    size: {
        width: number;
        height: number;
    };
    colorAtPixel: Function;
    resizableImage(args: JBInsets | {
        insets: JBInsets;
        mode: "tile" | "stretch"; // 默认为 stretch
    }): UIImage;
    resized: Function;
    __clsName: string;
    orientationFixedImage: UIImage;
    png: NSData;
    alwaysOriginal: UIImage;
    info: {
        scale: number;
        props: {
            "{JFIF}": {
                XDensity: number;
                YDensity: number;
                JFIFVersion: number[];
                DensityUnit: number;
            };
            "{Exif}": {
                PixelXDimension: number;
                PixelYDimension: number;
                ColorSpace: number;
            };
            DPIWidth: number;
            "{TIFF}": {
                Orientation: number;
                ResolutionUnit: number;
                XResolution: number;
                YResolution: number;
            };
            ColorModel: string;
            PixelHeight: number;
            ProfileName: string;
            Depth: number;
            DPIHeight: number;
            Orientation: number;
            PixelWidth: number;
        };
        width: number;
        height: number;
        orientation: number;
    };
}

interface UIFont extends JBBasicValue {
    __clsName: string;
}

interface BBCanvasContext extends JBBasicValue {
    fillColor: UIColor; // 用于填充的颜色
    strokeColor: UIColor; // 用于描边的颜色
    font: string; // 绘制文字时的字体
    fontSize: number; // 绘制文字时的字号大小
    allowsAntialiasing: boolean; // 是否允许自动抗锯齿

    saveGState(): void; // 存储状态
    restoreGState(): void; // 恢复状态
    scaleCTM(sx: number, sy: number): void; // 进行缩放操作
    translateCTM(tx: number, ty: number): void; // 进行平移操作
    rotateCTM(angle: number): void; // 进行旋转操作
    setLineWidth(width: number): void; // 设置描边宽度
    setLineCap(lineCap: number): void; // 用于渲染描边线端点的样式，在$lineCap中选择
    setLineJoin(lineJoin: number): void; // 描边线的连接类型，在$lineJoin中选择
    setMiterLimit(miterLimit: number): void; // 设定外延交点与连接点的最大距离
    setAlpha(alpha: number): void; // 设置透明度
    beginPath(): void; // 路径开始
    moveToPoint(x: number, y: number): void; // 移动到 (x, y) 这个点
    addLineToPoint(x: number, y: number): void; // 从当前点画一条线到 (x, y) 这个点
    addCurveToPoint(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    // 绘制一条曲线到 (x, y)，通过 (cp1x, cp1y) 和 (cp2x, cp2y) 进行曲率控制
    addQuadCurveToPoint(cpx: number, cpy: number, x: number, y: number): void;
    // 还是绘制曲线到 (x, y) 这个点，但是这次只有一个控制点 (cpx, cpy)
    closePath(): void; // 将路径闭合
    addRect(rect: JBRect): void; // 添加一个矩形
    addArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;
    // 添加一条弧线，以 (x, y) 为中点，radius 为半径，startAngle 为起始弧度，endAngle 为终止弧度，clockwise 表示是否顺时针。
    addArcToPoint(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    // 在 (x1, y1) 和 (x2, y2) 之间添加一条弧线。
    fillRect(rect: JBRect): void; // 填充一个矩形
    strokeRect(rect: JBRect): void; // 对矩形进行描边
    clearRect(rect: JBRect): void; // 清除一个矩形
    fillPath(): void; // 填充一个闭合的路径
    strokePath(): void; // 对闭合的路径进行描边
    drawPath(mode: number): void; // 使用指定模式绘制路径
    drawImage(rect: JBRect, image: UIImage): void; // 将 image 绘制到 rect 这个矩形上
    drawText(rect: JBRect, text: string, attributes: { color?: UIColor, font?: UIFont }): void; // 将文字绘制到 rect 这个矩形上
}

interface UIAccessibilityCustomAction extends JBBasicValue {
    __clsName: string;
}

interface UIMenu extends JBBasicValue {
    __clsName: string;
}

interface BBFileIcon extends JBBasicValue {
    __clsName: string;
}

interface LOTComposition extends JBBasicValue {
    __clsName: string;
}

interface WKNavigation extends JBBasicValue {
    __clsName: string;
}

interface WKNavigationAction extends JBBasicValue {
    __clsName: string;
    type: number;
    sourceURL?: string;
    targetURL: string;
    requestURL: string;
}