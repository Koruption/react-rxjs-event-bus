"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for the bus registries.
 */
class BaseBusRegistry {
    addBus(name, bus) {
        throw new Error("Method not implemented.");
    }
    removeBus(name) {
        throw new Error("Method not implemented.");
    }
    listBuses() {
        throw new Error("Method not implemented.");
    }
    getBus(name) {
        throw new Error("Method not implemented.");
    }
}
exports.default = BaseBusRegistry;
