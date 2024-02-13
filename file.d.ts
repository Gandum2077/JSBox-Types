// JSBox File API TypeScript Declaration

namespace FileTypes {
    interface FileWriteObject {
        data: NSData;
        path: string;
    }

    interface FileCopyMoveObject {
        src: string;
        dst: string;
    }

    interface FileMergeObject {
        files: string[];
        dest: string;
        chunkSize?: number;
    }

    interface FileSplitObject {
        file: string;
        chunkSize?: number;
    }
}

interface File {
    read(path: string): NSData;
    download(path: string): Promise<NSData>;
    write(object: FileTypes.FileWriteObject): boolean;
    delete(path: string): boolean;
    list(path: string): string[];
    copy(object: FileTypes.FileCopyMoveObject): boolean;
    move(object: FileTypes.FileCopyMoveObject): boolean;
    mkdir(path: string): boolean;
    exists(path: string): boolean;
    isDirectory(path: string): boolean;
    merge(args: FileTypes.FileMergeObject): void;
    split(args: FileTypes.FileSplitObject): void;
    absolutePath(path: string): string;
    rootPath: string;
    extensions: string[];
}

declare const $file: File;
