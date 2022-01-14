"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMap = void 0;
exports.errorMap = {
    EVENT_ALREADY_CREATED: (eventName) => { return `An event with the name ${eventName} has already been registered to the event bus.`; },
    EVENT_NOT_REGISTERED: (eventName) => { return `An event with the name ${eventName} has not yet been registered to the event bus.`; },
    BUS_ALREADY_CREATED: (busName) => { return `An Event Bus with the name ${busName} already exists.`; },
    BUS_NOT_REGISTERED: (busName) => { return `An Event Bus with the name ${busName} has not yet been registered.`; }
};
exports.default = exports.errorMap;
