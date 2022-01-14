import { Subject } from "rxjs";
import errorMap from "../common/errors";
import IEventRegistry from "../interfaces/ievent-registry";

/**
 * Default implementation of the event registry. This can 
 * be extended and overrided when creating an instance of 
 * an event bus by injecting a new registry in the constructor.
 */
class EventRegistry implements IEventRegistry {
  protected registry: Map<string, Subject<any>> = new Map<
    string,
    Subject<any>
  >();

  register<T>(eventName: string) {
    if (this.registry.has(eventName))
      throw new Error(errorMap.EVENT_ALREADY_CREATED(eventName));
    this.registry.set(eventName, new Subject<T>());
    return this.registry.get(eventName) as Subject<T>;
  }

  remove(eventName: string): void {
    if (!this.registry.has(eventName))
      throw new Error(errorMap.EVENT_NOT_REGISTERED(eventName));
    this.registry.delete(eventName);
    return;
  }

  getEvents(): String[] {
    return Array.from(this.registry.keys());
  }

  getEvent<T>(eventName: string) { 
    if (!this.registry.has(eventName))
      throw new Error(errorMap.EVENT_NOT_REGISTERED(eventName));
    return this.registry.get(eventName) as Subject<T>
  }

  clearEvents(): void {
    this.registry.clear();
    return;
  }
}

export default EventRegistry;