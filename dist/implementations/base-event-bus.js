"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for the event bus.
 */
class BaseEventBus {
    registry = null;
    addEvent(eventName) {
        throw new Error("Method not implemented.");
    }
    removeEvent(eventName) {
        throw new Error("Method not implemented.");
    }
    subscribe(eventName, subscriber) {
        throw new Error("Method not implemented.");
    }
    emit(eventName, data) {
        throw new Error("Method not implemented.");
    }
    flushEvents() {
        throw new Error("Method not implemented.");
    }
    listEvents() {
        throw new Error("Method not implemented.");
    }
}
exports.default = BaseEventBus;
