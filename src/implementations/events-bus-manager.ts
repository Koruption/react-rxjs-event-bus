import { IBusRegistry } from "../interfaces/ibus-registry";
import { IEventBus } from "../interfaces/ievent-bus";
import { DefaultBusRegistry } from "./default-bus-registry";

export class EventBusManager {

    static busRegistry: IBusRegistry | null = null;
    static manager: EventBusManager | null = null;

    constructor(busRegistry?: IBusRegistry) {
        if (EventBusManager.manager) return;
        if (EventBusManager.busRegistry) return;
        EventBusManager.manager = new EventBusManager();
        EventBusManager.busRegistry = new DefaultBusRegistry();
    }

    static getManager() {
        return EventBusManager.manager;
    }

    addBus(eventBus: IEventBus) {
    
    }
}