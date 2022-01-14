"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../common/errors"));
const base_bus_registry_1 = __importDefault(require("./base-bus-registry"));
const default_event_bus_1 = __importDefault(require("./default-event-bus"));
/**
 * Default implementation of the IEventBusRegistry providing a way
 * of registering multiple busses and maintaining a way of accessing
 * them later on.
 */
class DefaultBusRegistry extends base_bus_registry_1.default {
    registry = new Map();
    constructor() {
        super();
    }
    getBus(name) {
        if (!this.registry.get(name)) {
            throw new Error(errors_1.default.BUS_NOT_REGISTERED(name));
        }
        return this.registry.get(name);
    }
    addBus(name, bus) {
        if (this.registry.has(name)) {
            throw new Error(errors_1.default.BUS_ALREADY_CREATED(name));
        }
        if (bus) {
            this.registry.set(name, bus);
            return this;
        }
        this.registry.set(name, new default_event_bus_1.default());
        return this;
    }
    removeBus(name) {
        if (!this.registry.has(name)) {
            throw new Error(errors_1.default.BUS_NOT_REGISTERED(name));
        }
        this.registry.delete(name);
        return this;
    }
    listBuses() {
        return Array.from(this.registry.keys());
    }
}
exports.default = DefaultBusRegistry;
