// JSBox Imagekit API TypeScript Declaration

declare namespace ImagekitTypes {
  interface ImageInfo {
    width: number;
    height: number;
    orientation: number;
    scale: number;
    props: any; // 非常复杂的对象，不做类型定义了
  }

  interface GIFExtractResult {
    images: UIImage[];
    durations: number[];
  }

  interface GIFMakeOptions {
    duration?: number; // 若使用 duration 替代 durations，则每张图片时长一致
    durations?: number[];
    size?: number; // 16, 12, 8, 4, 2
  }

  interface VideoMakeOptions {
    // 若使用 duration 替代 durations，则每张图片时长一致，使用 GIF 时不需要指定时长
    duration?: number;
    durations?: number[];
  }

  enum CropToMode {
    TopLeft = 0,
    TopCenter = 1,
    TopRight = 2,
    BottomLeft = 3,
    BottomCenter = 4,
    BottomRight = 5,
    LeftCenter = 6,
    RightCenter = 7,
    Center = 8,
  }

  enum ScaleToMode {
    scaleFill = 0,
    scaleAspectFit = 1,
    scaleAspectFill = 2,
  }

  enum OrientationMode {
    vertically = 0,
    horizontally = 1,
  }
}

interface ImageKit {
  render(
    options: { size: JBSize; color: string; scale?: number; opaque?: boolean },
    handler: (ctx: BBCanvasContext) => void
  ): UIImage;
  info(image: UIImage): ImagekitTypes.ImageInfo; // 获取图片信息
  grayscale(image: UIImage): UIImage; // 转换成灰度图像
  invert(image: UIImage): UIImage; // 反色
  sepia(image: UIImage): UIImage; // 添加棕褐色滤镜
  adjustEnhance(image: UIImage): UIImage; // 自动改善图像效果
  adjustRedEye(image: UIImage): UIImage; // 自动红眼消除
  adjustBrightness(image: UIImage, value: number): UIImage;
  // 调整图片亮度, value range: (-255, 255)
  adjustContrast(image: UIImage, value: number): UIImage;
  // 调整图片对比度, value range: (-255, 255)
  adjustGamma(image: UIImage, value: number): UIImage;
  // 调整图片伽马值, value range: (0.01, 8)
  adjustOpacity(image: UIImage, value: number): UIImage;
  // 调整图片透明度, value range: (0, 1)
  blur(image: UIImage, bias: number): UIImage; // 高斯模糊效果
  emboss(image: UIImage, bias: number): UIImage; // 浮雕效果
  sharpen(image: UIImage, bias: number): UIImage; // 锐化效果
  unsharpen(image: UIImage, bias: number): UIImage; // 钝化效果
  detectEdge(image: UIImage, bias: number): UIImage; // 边缘检测
  mask(image: UIImage, mask: UIImage): UIImage; // 使用 mask 作为蒙版进行切图
  reflect(
    image: UIImage,
    height: number,
    fromAlpha: number,
    toAlpha: number
  ): UIImage;
  // 创建上下镜像的图片，从 height 处折叠，透明度从 fromAlpha 变化到 toAlpha
  cropTo(image: UIImage, size: JBSize, mode: number): UIImage;
  // 图片裁剪
  scaleBy(image: UIImage, value: number): UIImage;
  // 使用比例调整图片大小
  scaleTo(image: UIImage, size: JBSize, mode: number): UIImage;
  // 使用 size 调整图片大小
  scaleFill(image: UIImage, size: JBSize): UIImage;
  // 使用 scaleFill 模式调整大小
  scaleAspectFit(image: UIImage, size: JBSize): UIImage;
  // 使用 scaleAspectFit 模式调整大小
  scaleAspectFill(image: UIImage, size: JBSize): UIImage;
  // 使用 scaleAspectFill 模式调整大小
  rotate(image: UIImage, radians: number): UIImage;
  // 旋转图片（将会调整图像大小）
  rotatePixels(image: UIImage, radians: number): UIImage;
  // 旋转图片（不调整图像大小，可能会裁剪）
  flip(image: UIImage, mode: number): UIImage;
  // 获得镜像图片
  concatenate(images: UIImage[], space: number, mode: number): UIImage;
  // 拼接多张图片，可以添加间距
  combine(image1: UIImage, image2: UIImage, mode: number | JBPoint): UIImage;
  // 将两个图片叠加
  rounded(image: UIImage, radius: number): UIImage;
  // 获取圆角图片
  circular(image: UIImage): UIImage;
  // 获取正圆形图片，如果原图不是正方形则会居中并从来裁剪
  extractGIF(data: NSData): Promise<ImagekitTypes.GIFExtractResult>;
  // 将 GIF 文件分解成单帧
  makeGIF(
    images: UIImage[],
    options: ImagekitTypes.GIFMakeOptions
  ): Promise<NSData>; // 返回类型根据实际情况定义
  makeVideo(
    source: UIImage[],
    options: ImagekitTypes.VideoMakeOptions
  ): Promise<NSData>; // source 类型根据实际情况定义
}

declare const $imagekit: ImageKit;
