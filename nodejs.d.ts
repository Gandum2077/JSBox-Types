// JSBox Nodejs API TypeScript Declaration

interface Nodejs {
    run(args: string | {
        name: string;
        query: any;
        argv?: any[];
        listener: {
            id: string;
            handler: (result: any) => void;
        }
    }): void;
    listen(eventId: string, handler: (data: any) => void): void;
    version: string;
    path: string;
}

declare const $nodejs: Nodejs;
