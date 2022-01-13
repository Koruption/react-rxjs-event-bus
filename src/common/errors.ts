export const errorMap = {
    EVENT_ALREADY_CREATED: (eventName: string) => { return  `The event with the name ${eventName} has already been registered to the event bus.`},
    EVENT_NOT_REGISTERED: (eventName: string) => { return  `The event with the name ${eventName} has not yet been registered to the event bus.`}
}