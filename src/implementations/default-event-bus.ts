import { IEventBus } from "../interfaces/ievent-bus";
import { IEventRegistry } from "../interfaces/ievent-registry";
import { BaseEventBus } from "./base-event-bus";
import { EventRegistry } from "./event-registry";

export class DefaultEventBus extends BaseEventBus {

    static registry: IEventRegistry;
    
    constructor(registry?: IEventRegistry) {
        super();
        if (DefaultEventBus.registry) return;
        DefaultEventBus.registry = new EventRegistry();
    }

    addEvent<T>(eventName: string): IEventBus {
        DefaultEventBus.registry.register<T>(eventName);
        return this;
    }

    removeEvent(eventName: string): IEventBus {
        DefaultEventBus.registry.remove(eventName);
        return this;
    }

    subscribe<T>(eventName: string, subscriber: (data?: T) => void) {
        DefaultEventBus.registry.getEvent<T>(eventName).subscribe(subscriber);
        return this;
    }

    emit<T>(eventName: string, data?: T) {
        if (data) {
            DefaultEventBus.registry.getEvent<T>(eventName).next(data)
            return this;
        }
        DefaultEventBus.registry.getEvent<void>(eventName).next();
        return this;
    }

    flushEvents() {
        DefaultEventBus.registry.clearEvents();
        return this;
    }

    listEvents(): String[] {
        return DefaultEventBus.registry.getEvents();
    }

}