import { Subscription } from "rxjs";

export interface IEventBus {
    addEvent<T>(eventName: string): IEventBus;
    removeEvent(eventName: string): IEventBus;
    subscribe<T>(eventName: string, subscriber: (data?: T) => void): Subscription;
    emit<T>(eventName: string, data?: T): IEventBus;
    flushEvents(): IEventBus;
    listEvents(): String[];
}