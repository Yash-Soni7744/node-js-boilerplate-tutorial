// //using promises
// const {readFile,writeFile} = require('fs')

// const getFile = (path)=>{
//     return new Promise((resolve,reject)=>{

//         readFile(path,'utf-8', (err, data)=>{
            
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//         writeFile(path,'utf-8', (err, data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getFile('./myfile.txt','utf-8').then((result)=>{ console.log(result)}).catch((err)=>{console.log(err)})

// //using async-await

// const {readFile,writeFile} = require('fs')
// const getFile = (path)=>{
//     return new Promise((resolve,reject)=>{

//         readFile(path,'utf-8', (err, data)=>{
            
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//         writeFile(path,'utf-8', (err, data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async ()=>{
//     try{
//         const first = await getFile('./myfile.txt','utf-8')
//         const second = await getFile('./second-myfile.txt',`Here is the result : ${first}`)
//         console.log(first, second)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start()
// //using util module

// const util = require('util')
// const {readFile,writeFile} = require('fs')

// const readFilePath = util.promisify(readFile)
// const writeFilePath = util.promisify(writeFile)

// const start = async ()=>{
//     try{
//         const first = await readFilePath('./myfile.txt','utf-8')
//         await writeFilePath('some-new-file.txt','utf-8',`here is the result ${first}`)
//         console.log(first)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start()
