# 🚌 rxjs-event-bus 🚌

#### Setup
```
npm install rxjs-event-bus 
```
#### Package Overview
A subject based event bus that can be used server or client side to decouple your application layers, help you build more reactive applications, or mitigate complicated component tree hierarchies. The system was made to be as flexible as possible so that it could scale to meet the needs of a diverse set of applications and offers support for extending much of the default functionality.  

#### Getting Started 
The event bus manager supports registering multiple buses at a time.
This was done to fascillitate better organization of events around different 
contexts. However, depending on the complexity of your use case, one bus may be all that is required.
``` ts
// create an instance of the bus manager 
new EventBusManager();

// get instance of the manager and create some buses
const manager = EventBusManager.getManager();
manager.addBus('my-first-bus');
manager.addBus('my-second-bus');

// create events 
manager.getBus('my-first-bus')
    .addEvent<Array<string>>('my-first-event');
manager.getBus('my-second-bus')
    .addEvent<Object>('my-second-event');

// subscribe to events 
manager.getBus('my-first-bus')
    .subscribe<Array<string>>('my-first-event', (arrStrings) => {
        console.log(arrStrings);
    });
manager.getBus('my-second-bus')
    .subscribe<Object>('my-second-event', (dataObject) => {
        console.log(dataObject);
    });

// raise events 
manager.getBus('my-first-bus').emit('my-first-event', ['hello', 'good bye']);
manager.getBus('my-second-bus').emit('my-second-event', {
    name: 'Charlie Brown',
    age: 123,
    occupation: 'professional field goal kicker'
});

/**
 * Outputs: 
 * [ 'hello', 'good bye' ]
    {
    name: 'Charlie Brown',
    age: 123,
    occupation: 'professional field goal kicker'
    }

*/

``` 

#### Asynchronous Subscribers 
Subscribers can run in an asynchronous setting by passing an async function 
when subscribing to an event.
``` ts
bus = manager.getBus('my-second-bus');

const timedFunction = () => {
    return new Promise<void>((res, rej) => {
        console.log('Timing out for 3 seconds.')
        setTimeout(() => {
            res();
        }, 3000)
    })
};

bus.subscribe<Object>('my-second-event', async (dataObject) => {
    await timedFunction();
    console.log('Timeout done');
});

``` 