//using promises

const {readFile,writeFile} = require('fs')

const getFile = (path)=>{
    return new Promise((resolve,reject)=>{

        readFile(path,'utf-8', (err, data)=>{
            
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
        writeFile(path,'utf-8', (err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

const start = async ()=>{
    const first = await getFile('./myfile.txt')
    const second = await getFile('./second-myfile.txt',`Here is the result : ${first}`)
    console.log(first, second)
}

start()

// getFile('./myfile.txt').then((result)=>{ console.log(result)}).catch((err)=>{console.log(err)})