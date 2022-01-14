import IBusRegistry from "../interfaces/ibus-registry";
import IEventBus from "../interfaces/ievent-bus";

/**
 * Base class for the bus registries.
 */
class BaseBusRegistry implements IBusRegistry {
    addBus(name: string, bus: IEventBus): IBusRegistry {
        throw new Error("Method not implemented.");
    }
    removeBus(name: string): IBusRegistry {
        throw new Error("Method not implemented.");
    }
    listBuses(): string[] {
        throw new Error("Method not implemented.");
    }
    getBus(name: string): IEventBus {
        throw new Error("Method not implemented.");
    }

}

export default BaseBusRegistry;