//os module
//path module
//fs(file system) module
//http module

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {name: os.type(),
release: os.release(),
totalMemory: os.totalmem(),
freeMemory: os.freemem(),
getPrior: os.getPriority()}
console.log(currentOS)

//use nodemon to get the updated result
