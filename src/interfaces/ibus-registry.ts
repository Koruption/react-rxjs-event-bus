import IEventBus from "./ievent-bus";
import IEventRegistry from "./ievent-registry";

interface IBusRegistry {

    /**
     * Adds a new implementation of the IEventBus to the bus registry.
     * 
     * @param name The name of the bus you are creating
     * @param bus An implementation of the IEventBus
     */
    addBus(name: string, bus?: IEventBus): IBusRegistry;
    /**
     * Removes an IEventBus implementation from the bus registry.
     * @param name The name of the bus to remove from the registry
     */
    removeBus(name: string): IBusRegistry;
    /**
     * Returns a list of the names of the busses currently 
     * registred in the registry.
     */
    listBuses(): Array<string>;
    /**
     * Retrieves the IEventBus implementation with the name 
     * provided, from the registry.
     * @param name The name of the IEventBus implementation to retrieve
     */
    getBus(name: string): IEventBus;
    
}

export default IBusRegistry;    