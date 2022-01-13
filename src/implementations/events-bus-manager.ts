import { IBusRegistry } from "../interfaces/ibus-registry";
import { IEventBus } from "../interfaces/ievent-bus";

export class EventBusManager {

    static busRegistry: IBusRegistry | null = null;

    constructor() {
        
    }

    addBus(eventBus: IEventBus) {
    
    }
}