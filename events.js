const {EventEmitter} = require('events')

const customEventEmitter = new EventEmitter()

customEventEmitter.on('response',(name,id)=>{
    console.log(`data recieved and username is: ${name} and id is: ${id}`)
})
customEventEmitter.on('responseType',(type)=>{
    console.log(`the type of work is ${type}`)
})

customEventEmitter.emit('response','john',34)
customEventEmitter.emit('responseType','large')

//Note: EventEmitter is a built in property in events module
//and we are defining our customevent using new EventEmitter instance
//here for different listeners the custom event should be different and we can define our own events like response and responseType
//
