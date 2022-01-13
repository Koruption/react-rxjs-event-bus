import { Subject } from "rxjs";
import { IEventBus } from "../interfaces/ievent-bus";
import { IEventRegistry } from "../interfaces/ievent-registry";
import { BaseEventBus } from "./base-event-bus";
import { EventRegistry } from "./event-registry";

export class DefaultEventBus extends BaseEventBus {

    registry: IEventRegistry;
    
    constructor(registry?: IEventRegistry) {
        super();
        this.registry = new EventRegistry();
    }

    addEvent<T>(eventName: string): IEventBus {
        this.registry.register<T>(eventName);
        return this;
    }

    removeEvent(eventName: string): IEventBus {
        this.registry.remove(eventName);
        return this;
    }

    subscribe<T>(eventName: string, subscriber: (data?: T) => void) {
        return this.registry.getEvent<T>(eventName).subscribe(subscriber);
    }

    emit<T>(eventName: string, data?: T) {
        if (data) {
            this.registry.getEvent<T>(eventName).next(data)
            return this;
        }
        this.registry.getEvent<void>(eventName).next();
        return this;
    }

    flushEvents() {
        this.registry.clearEvents();
        return this;
    }

    listEvents(): String[] {
        return this.registry.getEvents();
    }

}