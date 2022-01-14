import { Subject } from "rxjs";


export interface IEventRegistry {
    
    /**
     * Registers an event to the registry.
     * 
     * Note that the generic type is used to specify the event 
     * data on the event.
     * @param eventName The name of the event to register.
     */
    register<T>(eventName: string): Subject<T>;
    /**
     * Removes an event from the registry. Note that this 
     * does not cleanup any current subscribers of the event.
     * @param eventName 
     */
    remove(eventName: string): void;
    /**
     * Rertrieves a list of event names from the registry.
     */
    getEvents(): String[];
    /**
     * Retrieves an event with the name provided, from the registry.
     * @param eventName The name of the event to retrieve
     */
    getEvent<T>(eventName: string): Subject<T>
    /**
     * Clears all events from the registry. Note that this will not 
     * cleanup any current subscribers. 
     */
    clearEvents(): void;
}