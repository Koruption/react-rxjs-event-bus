"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_bus_manager_1 = require("./implementations/events-bus-manager");
function main() {
    console.log('Running Tests...');
    // new EventBusManager();
    // const busManager: EventBusManager = EventBusManager.getManager();
    // const busOne = busManager.addBus('test-bus-1');
    // const busTwo = busManager.addBus('test-bus-2');
    // busOne.addEvent<Array<string>>('event-one');
    // busTwo.addEvent<string>('event-two');
    // busOne.addEvent<Object>('event-three');
    // const rxSubOne = busOne.subscribe<Array<string>>('event-one', (arrayOfStrings) => {
    //     console.log(arrayOfStrings);
    // });
    // const rxSubTwo = busTwo.subscribe<string>('event-two', (stringMessage) => {
    //     console.log(stringMessage)
    //     // busOne.subscribe<Object>('event-three', (data) => {
    //     //     console.log(data);
    //     // })
    //     // setTimeout(() => {
    //     //     busOne.emit('event-three', {
    //     //         name: 'Charlie Brown',
    //     //         age: 12,
    //     //         occupation: 'Football Kicker'
    //     //     });
    //     // }, 4000)
    // })
    // console.log(busOne.listEvents());
    // console.log(busTwo.listEvents());
    // busOne.emit('event-one', ['Hello', 'Goodbye']);
    // busTwo.emit('event-two', 'This is a message string. Just checking to verify that it works.');
    // rxSubOne.unsubscribe();
    // rxSubTwo.unsubscribe();
    // busOne.flushEvents();
    // busTwo.flushEvents();
    // console.log(busOne.listEvents());
    // console.log(busTwo.listEvents());
    // // get instance of the manager and create some buses
    // const manager = EventBusManager.getManager();
    // manager.addBus('my-first-bus');
    // manager.addBus('my-second-bus');
    // // create events 
    // manager.getBus('my-first-bus')
    //     .addEvent<Array<string>>('my-first-event');
    // manager.getBus('my-second-bus')
    //     .addEvent<Object>('my-second-event');
    // // subscribe to events 
    // manager.getBus('my-first-bus')
    //     .subscribe<Array<string>>('my-first-event', (arrStrings) => {
    //         console.log(arrStrings);
    //     });
    // manager.getBus('my-second-bus')
    //     .subscribe<Object>('my-second-event', (dataObject) => {
    //         console.log(dataObject);
    //     });
    // // raise events 
    // manager.getBus('my-first-bus').emit('my-first-event', ['hello', 'good bye']);
    // manager.getBus('my-second-bus').emit('my-second-event', {
    //     name: 'Charlie Brown',
    //     age: 123,
    //     occupation: 'professional field goal kicker'
    // });
    // create an instance of the bus manager 
    new events_bus_manager_1.EventBusManager();
    // get instance of the manager and create some buses
    const manager = events_bus_manager_1.EventBusManager.getManager();
    manager.addBus('my-first-bus');
    manager.addBus('my-second-bus');
    // create events 
    manager.getBus('my-first-bus')
        .addEvent('my-first-event');
    manager.getBus('my-second-bus')
        .addEvent('my-second-event');
    // subscribe to events 
    manager.getBus('my-first-bus')
        .subscribe('my-first-event', (arrStrings) => {
        console.log(arrStrings);
    });
    manager.getBus('my-second-bus')
        .subscribe('my-second-event', (dataObject) => {
        console.log(dataObject);
    });
    const timedFunction = () => {
        return new Promise((res, rej) => {
            console.log('Timing out for 3 seconds.');
            setTimeout(() => {
                res();
            }, 3000);
        });
    };
    manager.getBus('my-second-bus')
        .subscribe('my-second-event', async (dataObject) => {
        await timedFunction();
        console.log('Done timing');
    });
    // raise events 
    manager.getBus('my-first-bus').emit('my-first-event', ['hello', 'good bye']);
    manager.getBus('my-second-bus').emit('my-second-event', {
        name: 'Charlie Brown',
        age: 123,
        occupation: 'professional field goal kicker'
    });
}
main();
