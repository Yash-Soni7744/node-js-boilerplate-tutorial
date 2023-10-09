//using promises

// const {readFile} = require('fs')

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
//     })
// }

// getFile('./myfile.txt').then((result)=>{ console.log(result)}).catch((err)=>{console.log(err)})