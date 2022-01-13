import { Subject } from "rxjs";


export interface IEventRegistry {
    
    register<T>(eventName: string): Subject<T>;
    remove(eventName: string): void;
    getEvents(): String[];
    getEvent<T>(eventName: string): Subject<T>
    clearEvents(): void;
}