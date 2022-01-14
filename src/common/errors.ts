export const errorMap = {
    EVENT_ALREADY_CREATED: (eventName: string) => { return  `An event with the name ${eventName} has already been registered to the event bus.`},
    EVENT_NOT_REGISTERED: (eventName: string) => { return  `An event with the name ${eventName} has not yet been registered to the event bus.`},
    BUS_ALREADY_CREATED: (busName: string) => { return `An Event Bus with the name ${busName} already exists.` },
    BUS_NOT_REGISTERED: (busName: string) => { return `An Event Bus with the name ${busName} has not yet been registered.` }
}

export default errorMap;    