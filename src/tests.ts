import { EventBusManager } from "./implementations/events-bus-manager";

new EventBusManager();

const busManager: EventBusManager = EventBusManager.getManager(); 
busManager.addBus('test-bus');
busManager.