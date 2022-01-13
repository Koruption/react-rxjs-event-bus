import { EventBusManager } from "./implementations/events-bus-manager";

function main() {
    console.log('Running Tests...')
    new EventBusManager();

    const busManager: EventBusManager = EventBusManager.getManager(); 
    const busOne = busManager.addBus('test-bus-1');
    const busTwo = busManager.addBus('test-bus-2');
    busOne.addEvent<Array<string>>('event-one');
    busTwo.addEvent<string>('event-two');
    busOne.addEvent<Object>('event-three');

    const rxSubOne = busOne.subscribe<Array<string>>('event-one', (arrayOfStrings) => {
        console.log(arrayOfStrings);
    });

    const rxSubTwo = busTwo.subscribe<string>('event-two', (stringMessage) => {
        console.log(stringMessage)
        // busOne.subscribe<Object>('event-three', (data) => {
        //     console.log(data);
        // })
        // setTimeout(() => {
        //     busOne.emit('event-three', {
        //         name: 'Charlie Brown',
        //         age: 12,
        //         occupation: 'Football Kicker'
        //     });
        // }, 4000)
    })


    console.log(busOne.listEvents());
    console.log(busTwo.listEvents());

    busOne.emit('event-one', ['Hello', 'Goodbye']);
    busTwo.emit('event-two', 'This is a message string. Just checking to verify that it works.');

    rxSubOne.unsubscribe();
    rxSubTwo.unsubscribe();

    busOne.flushEvents();
    busTwo.flushEvents();
    console.log(busOne.listEvents());
    console.log(busTwo.listEvents());

}

main();