import { Subscription } from "rxjs";

export interface IEventBus {
    /**
     * Adds a new event to the event registry. Note that the 
     * generic type will be used to specify the data type returned 
     * to any subscribers of the event, but is only required if 
     * you intend to send data through the event.
     * 
     * Throws an error if an event with the name provided 
     * has already been registered.
     * @param eventName The name of the event to register
     */
    addEvent<T>(eventName: string): IEventBus;
    /**
     * Removes an event from the event registry. Note that 
     * this does not cleanup any current subscribers of the event.
     * 
     * Throws an error if an event with the name provided 
     * has not been registered.
     * @param eventName 
     */
    removeEvent(eventName: string): IEventBus;
    /**
     * Subscribes a function to an event. When the event is 
     * emitted this funciton will be called automatically. Note 
     * that if you do not intend to keep the subscription open for 
     * the duration of your application, unsubscribing should be handled
     * with the Subscription object returned to you from this method.
     * 
     * The generic type will be used to specify the parametrization of your 
     * subscriber.
     * @param eventName The name of the event to subscribe to.
     * @param subscriber The method which will be invoked when the event is emitted.
     */
    subscribe<T>(eventName: string, subscriber: (data?: T) => void | Promise<void>): Subscription;
    /**
     * Raises an event and notifies all subscribers currently subscribed to it. 
     * @param eventName The name of the event to raise
     * @param data (Optional) The event data you wish to pass to each subscriber when the event is raised.
     */
    emit<T>(eventName: string, data?: T): IEventBus;
    /**
     * Removes all events from the registry. Note that this does 
     * not unsubscribe and current subscribers you may have. 
     */
    flushEvents(): IEventBus;
    /**
     * Retrieves a list of all event names currently in the registry.
     */
    listEvents(): String[];
}