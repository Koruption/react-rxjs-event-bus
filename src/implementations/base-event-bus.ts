import { Subscription } from "rxjs";
import { IEventBus } from "../interfaces/ievent-bus";
import { IEventRegistry } from "../interfaces/ievent-registry";

/**
 * Base class for the event bus.
 */
export class BaseEventBus implements IEventBus {

    protected registry: IEventRegistry | null = null;

    addEvent<T>(eventName: string): IEventBus {
        throw new Error("Method not implemented.");
    }
    removeEvent(eventName: string): IEventBus {
        throw new Error("Method not implemented.");
    }
    subscribe<T>(eventName: string, subscriber: (data?: T) => void): Subscription{
        throw new Error("Method not implemented.");
    }
    emit<T>(eventName: string, data?: T): IEventBus {
        throw new Error("Method not implemented.");
    }
    flushEvents(): IEventBus {
        throw new Error("Method not implemented.");
    }
    listEvents(): String[] {
        throw new Error("Method not implemented.");
    }

}