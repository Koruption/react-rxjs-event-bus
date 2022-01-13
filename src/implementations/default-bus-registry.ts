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

    getBus(name: string): IEventBus | undefined {
        return this.registry.get(name);
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
        if (this.registry.has(name)) {
            this.registry.delete(name);
            return this;
        } else {
            throw new Error(errorMap.BUS_NOT_REGISTERED(name));
        }
    }
    listBuses(): string[] {
        return Array.from(this.registry.keys());
    }

}