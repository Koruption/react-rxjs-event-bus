import { IBusRegistry } from "../interfaces/ibus-registry";
import { IEventBus } from "../interfaces/ievent-bus";
import { DefaultBusRegistry } from "./default-bus-registry";

export class EventBusManager {

    protected static busRegistry: IBusRegistry;
    protected static manager: EventBusManager;

    constructor(busRegistry?: IBusRegistry) {
        if (EventBusManager.manager) return;
        if (EventBusManager.busRegistry) return;
        EventBusManager.manager = this;
        EventBusManager.busRegistry = new DefaultBusRegistry();
    }

    static getManager() {
        return EventBusManager.manager;
    }

    addBus(name: string, bus?: IEventBus): IEventBus {
        if (bus) {
            EventBusManager.busRegistry.addBus(name, bus);
            return EventBusManager.busRegistry.getBus(name)
        }
        EventBusManager.busRegistry.addBus(name);
        return EventBusManager.busRegistry.getBus(name);
    }
}