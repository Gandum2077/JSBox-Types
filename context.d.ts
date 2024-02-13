// JSBox $context API TypeScript Declaration

namespace ContextTypes {
    interface SafariItem {
        baseURI: string;
        source: string;
        location: string;
        contentType: string;
        title: string;
        selection: {
            html: string;
            text: string;
            style: string;
        };
    }

    interface AllItems {
        text?: string;
        textItems?: string[];
        link?: string;
        linkItems?: string[];
        image?: UIImage;
        imageItems?: UIImage[];
        data?: NSData;
        dataItems?: NSData[];
        safari?: {
            items: SafariItem;
        };
    }
}

interface Context {
    query: object;
    text: string;
    textItems: string[];
    link: string;
    linkItems: string[];
    image: UIImage;
    imageItems: UIImage[];
    data: NSData;
    dataItems: NSData[];
    safari: {
        items: ContextTypes.SafariItem;
    };
    allItems: ContextTypes.AllItems;

    clear(): void;
    close(): void;
}

declare const $context: Context;