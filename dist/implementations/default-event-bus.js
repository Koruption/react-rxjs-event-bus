"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultEventBus = void 0;
const base_event_bus_1 = __importDefault(require("./base-event-bus"));
const event_registry_1 = __importDefault(require("./event-registry"));
/**
 * Default implementation of the IEventBusRegistry providing the common
 * functionality you'd expect from an event bus. This can be extened
 * to support more custom functionality and injected in the bus manager
 * when registering a new bus.
 */
class DefaultEventBus extends base_event_bus_1.default {
    registry;
    constructor(registry) {
        super();
        if (registry) {
            this.registry = registry;
            return;
        }
        this.registry = new event_registry_1.default();
    }
    addEvent(eventName) {
        this.registry.register(eventName);
        return this;
    }
    removeEvent(eventName) {
        this.registry.remove(eventName);
        return this;
    }
    subscribe(eventName, subscriber) {
        return this.registry.getEvent(eventName).subscribe(subscriber);
    }
    emit(eventName, data) {
        if (data) {
            this.registry.getEvent(eventName).next(data);
            return this;
        }
        this.registry.getEvent(eventName).next();
        return this;
    }
    flushEvents() {
        this.registry.clearEvents();
        return this;
    }
    listEvents() {
        return this.registry.getEvents();
    }
}
exports.DefaultEventBus = DefaultEventBus;
exports.default = DefaultEventBus;
