import { IBusRegistry } from "../interfaces/ibus-registry";
import { IEventBus } from "../interfaces/ievent-bus";
import { DefaultBusRegistry } from "./default-bus-registry";

/**
 * Class responsible for maintaining the singleton instance of 
 * of the bus registry. The manager only has to be instanced 
 * once to begin using the event bus system.
 */
export class EventBusManager {

    protected static busRegistry: IBusRegistry;
    protected static manager: EventBusManager;

    constructor(busRegistry?: IBusRegistry) {
        if (EventBusManager.manager) return;
        if (EventBusManager.busRegistry) return;
        EventBusManager.manager = this;
        EventBusManager.busRegistry = new DefaultBusRegistry();
    }

    /**
     * Returns the singleton instance of the event bus manager.
     * @returns 
     */
    static getManager() {
        return EventBusManager.manager;
    }

    /**
     * Adds a new bus to the bus registry. Note that in most cases you will not 
     * need to override the default bus and you can leave the second param empty.
     * @param name The name of the bus you are adding
     * @param bus (optional) The instance of the bus. If no bus is provided the default bus will be useed.
     * @returns 
     */
    addBus(name: string, bus?: IEventBus): IEventBus {
        if (bus) {
            EventBusManager.busRegistry.addBus(name, bus);
            return EventBusManager.busRegistry.getBus(name)
        }
        EventBusManager.busRegistry.addBus(name);
        return EventBusManager.busRegistry.getBus(name);
    }

    /**
     * Retrieves a bus from the bus registry.
     * @param name The name of the bus retrieve
     * @returns 
     */
    getBus(name: string) {
        return EventBusManager.busRegistry.getBus(name);
    }
}