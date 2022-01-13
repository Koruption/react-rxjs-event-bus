import { IEventBus } from "./ievent-bus";
import { IEventRegistry } from "./ievent-registry";

export interface IBusRegistry {

    addBus(name: string, bus?: IEventBus): IBusRegistry;
    removeBus(name: string): IBusRegistry;
    listBuses(): Array<string>;
    getBus(name: string): IEventBus;
    
}