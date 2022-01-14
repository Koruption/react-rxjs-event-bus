"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBusManager = void 0;
const default_bus_registry_1 = __importDefault(require("./default-bus-registry"));
/**
 * Class responsible for maintaining the singleton instance of
 * of the bus registry. The manager only has to be instanced
 * once to begin using the event bus system.
 */
class EventBusManager {
    static busRegistry;
    static manager;
    constructor(busRegistry) {
        if (EventBusManager.manager)
            return;
        if (EventBusManager.busRegistry)
            return;
        EventBusManager.manager = this;
        EventBusManager.busRegistry = new default_bus_registry_1.default();
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
    addBus(name, bus) {
        if (bus) {
            EventBusManager.busRegistry.addBus(name, bus);
            return EventBusManager.busRegistry.getBus(name);
        }
        EventBusManager.busRegistry.addBus(name);
        return EventBusManager.busRegistry.getBus(name);
    }
    /**
     * Retrieves a bus from the bus registry.
     * @param name The name of the bus retrieve
     * @returns
     */
    getBus(name) {
        return EventBusManager.busRegistry.getBus(name);
    }
}
exports.EventBusManager = EventBusManager;
exports.default = EventBusManager;
