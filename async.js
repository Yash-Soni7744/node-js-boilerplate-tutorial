//ctrl + c for exiting the port
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log('request event')
//     res.end('hello')
// })

// server.listen(5000,()=>{
//     console.log('Server listening on port : 5000...')
// })

//using events
const http = require('http')
const server = http.createServer()

server.on('error',(error)=>{
    console.log(error)
})
server.on('response', (req, res) => {
    console.log('Done')
    res.end('Welcome')
})
server.listen(5000, () => {
    console.log('Server listening on port : 5000...')
})
