// JSBox iCloud API TypeScript Declaration

namespace DriveTypes {
  interface FileWriteObject {
    data: NSData;
    path: string;
  }

  interface FileCopyMoveObject {
    src: string;
    dst: string;
  }
  interface DriveOpenOptions {
    types?: string[];
    handler: (data: NSData) => void;
  }

  interface DriveOpenOptionsMulti {
    types?: string[];
    multi: true;
    handler: (files: NSData[]) => void;
  }

  interface SaveOptions {
    data: NSData;
    path: string;
    handler?: (path: string) => void;
    // 此处为文档缺失部分，实际表现来看，handler中的path参数为保存的文件路径
  }
}

interface Drive {
  // 回调形式
  open(options: DriveTypes.DriveOpenOptions): void;
  open(options: DriveTypes.DriveOpenOptionsMulti): void;
  save(options: DriveTypes.SaveOptions): void;

  // 异步形式
  open(options?: Omit<DriveTypes.DriveOpenOptions, "handler">): Promise<NSData>;
  open(
    options: Omit<DriveTypes.DriveOpenOptionsMulti, "handler">
  ): Promise<NSData[]>;
  save(options: DriveTypes.SaveOptions): Promise<string>;

  read(path: string): NSData;
  download(path: string): Promise<NSData>;
  write(object: DriveTypes.FileWriteObject): boolean;
  delete(path: string): boolean;
  list(path: string): string[];
  copy(object: DriveTypes.FileCopyMoveObject): boolean;
  move(object: DriveTypes.FileCopyMoveObject): boolean;
  mkdir(path: string): boolean;
  exists(path: string): boolean;
  isDirectory(path: string): boolean;
  absolutePath(path: string): string;
}

declare const $drive: Drive;
