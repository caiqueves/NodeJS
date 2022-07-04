const {EventEmitter} = require('events')
const ev = new EventEmitter()

// Escutando eventos sempre
ev.on('saySomething',(message) => {
    console.log('eu ouvi você:', message)
})

// Escutando uma única vez
ev.once('saySomething',(message) => {
    console.log('eu ouvi você:', message)
})

// Disparando eventos
ev.emit('saySomething',"CAIQUE")
ev.emit('saySomething',"VIDINHA")
