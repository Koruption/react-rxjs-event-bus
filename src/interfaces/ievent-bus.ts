export interface IEventBus {
    addEvent<T>(eventName: string): IEventBus;
    removeEvent(eventName: string): IEventBus;
    subscribe<T>(eventName: string, subscriber: (data?: T) => void): IEventBus;
    emit<T>(eventName: string, data?: T): IEventBus;
    flushEvents(): IEventBus;
    listEvents(): String[];
}