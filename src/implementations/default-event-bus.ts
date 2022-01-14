import { Subject } from "rxjs";
import IEventBus from "../interfaces/ievent-bus";
import IEventRegistry from "../interfaces/ievent-registry";
import BaseEventBus from "./base-event-bus";
import EventRegistry from "./event-registry";

/**
 * Default implementation of the IEventBusRegistry providing the common 
 * functionality you'd expect from an event bus. This can be extened 
 * to support more custom functionality and injected in the bus manager
 * when registering a new bus.
 */
export class DefaultEventBus extends BaseEventBus {

    protected registry: IEventRegistry;

    constructor(registry?: IEventRegistry) {
        super();
        if (registry) {
            this.registry = registry;
            return;
        }
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

    subscribe<T>(eventName: string, subscriber: (data?: T) => void | Promise<void>) {
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

export default DefaultEventBus;