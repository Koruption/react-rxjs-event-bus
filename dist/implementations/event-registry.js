"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const errors_1 = __importDefault(require("../common/errors"));
/**
 * Default implementation of the event registry. This can
 * be extended and overrided when creating an instance of
 * an event bus by injecting a new registry in the constructor.
 */
class EventRegistry {
    registry = new Map();
    register(eventName) {
        if (this.registry.has(eventName))
            throw new Error(errors_1.default.EVENT_ALREADY_CREATED(eventName));
        this.registry.set(eventName, new rxjs_1.Subject());
        return this.registry.get(eventName);
    }
    remove(eventName) {
        if (!this.registry.has(eventName))
            throw new Error(errors_1.default.EVENT_NOT_REGISTERED(eventName));
        this.registry.delete(eventName);
        return;
    }
    getEvents() {
        return Array.from(this.registry.keys());
    }
    getEvent(eventName) {
        if (!this.registry.has(eventName))
            throw new Error(errors_1.default.EVENT_NOT_REGISTERED(eventName));
        return this.registry.get(eventName);
    }
    clearEvents() {
        this.registry.clear();
        return;
    }
}
exports.default = EventRegistry;
