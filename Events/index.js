import EventEmitter from 'events'
const customEmitter = new EventEmitter() //whole object
customEmitter.once("response", (name, id)=>{ // using its "on" property
    console.log(`Received response from ${name} with id ${id}`)
})
customEmitter.emit("response", 'Mukhlisa',17) // to emit an event when it is run on console
customEmitter.emit("response", 'Munisa',2) // to emit an event when it is run on console
customEmitter.emit("response", 'Muslima',26) // to emit an event when it is run on console