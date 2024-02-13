// JSBox Calendar API TypeScript Declaration

namespace CalendarTypes {
    interface CalendarItem {
        title: string;
        location: string;
        notes: string;
        url: string;
        allDay: boolean;
        startDate: Date;
        endDate: Date;
        readonly status: number; // 根据Apple文档定义的状态
        readonly eventIdentifier: string;
        readonly creationDate: Date;
        readonly modifiedDate: Date;
    }

    interface FetchOptions {
        startDate: Date;
        endDate?: Date;
        hours?: number;
        handler: (response: { status: boolean; events: CalendarItem[] }) => void;
    }

    interface CreateOptions {
        title: string;
        startDate: Date;
        hours?: number;
        notes?: string;
        handler: (response: { status: number, error?: NSError }) => void;
    }

    interface SaveOptions {
        event: CalendarItem;
        alarmDate?: Date;
        alarmDates?: Date[];
        handler: (response: { status: number, error?: NSError }) => void;
    }

    interface DeleteOptions {
        event: CalendarItem;
        handler: (response: { status: number, error?: NSError }) => void;
    }
}

interface Calendar {
    fetch(options: CalendarTypes.FetchOptions): void;
    create(options: CalendarTypes.CreateOptions): void;
    save(options: CalendarTypes.SaveOptions): void;
    delete(options: CalendarTypes.DeleteOptions): void;
}

declare const $calendar: Calendar;