// JSBox PDF API TypeScript Declaration

namespace PdfTypes {
  interface PDFMakeOptions {
    url?: string;
    html?: string;
    images?: UIImage[];
    pageSize?: number; // 通过$pageSize来选择
    handler: (resp: { data: NSData }) => void;
  }
}

interface Pdf {
  make(options: PdfTypes.PDFMakeOptions): void;
  make(
    options: Omit<PdfTypes.PDFMakeOptions, "handler">
  ): Promise<{ data: NSData }>;
  toImages(data: NSData): UIImage[];
  toImage(data: NSData): UIImage;
}

declare const $pdf: Pdf;
