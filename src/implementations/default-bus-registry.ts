import { errorMap } from "../common/errors";
import { IBusRegistry } from "../interfaces/ibus-registry";
import { IEventBus } from "../interfaces/ievent-bus";
import { BaseBusRegistry } from "./base-bus-registry";
import { DefaultEventBus } from "./default-event-bus";

export class DefaultBusRegistry extends BaseBusRegistry {

    protected registry: Map<string, IEventBus> = new Map<string, IEventBus>();
    
    constructor() {
        super();
    }

    getBus(name: string): IEventBus {
        if (!this.registry.get(name)) {
            throw new Error(errorMap.BUS_NOT_REGISTERED(name));
        }
        return this.registry.get(name) as IEventBus;
    }

    addBus(name: string, bus?: IEventBus): IBusRegistry {
        if (this.registry.has(name)) {
            throw new Error(errorMap.BUS_ALREADY_CREATED(name));
        }
        if (bus) {
            this.registry.set(name, bus);
            return this;
        }
        this.registry.set(name, new DefaultEventBus());
        return this;
    }

    removeBus(name: string): IBusRegistry {
        if (!this.registry.has(name)) {
            throw new Error(errorMap.BUS_NOT_REGISTERED(name));
        } 
        this.registry.delete(name);
        return this;
    }

    listBuses(): string[] {
        return Array.from(this.registry.keys());
    }

}