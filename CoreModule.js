// // create  a server with node js by Core Module
let http = require('http')

let server = http.createServer((req , res)=>{ // request et response callback function asyncrone function non blocing
   res.writeHead(200 ,{ 'content-type' :' text/html' }) // status of server and contente type
   res.write('<h2> i create a server with node js </h2>') // what i want to write on screen on browser
   res.end() // fin de creation de server 
})

const port = 4000 //  create a port to open on chrome
server.listen(port ,(err)=>{ //we should add the callback function (err) bq it's asyncrone and no bloking sserver
    err ? console.log('server faile!!') 
    : 
    console.log(`server is connected on ${port}..`)
})

// // exemple with file systeme

let fs = require ('fs')

// create file 
fs.writeFileSync('file.txt' , 'hello this is the contente of my file')

// read file synchrone

let fileContente = fs.readFileSync('file.txt' , 'utf-8')

console.log(fileContente)




// read file asynchrone
// let fs = require ('fs')

// fs.writeFile('file.txt' , 'hello this is the contente of my file',(err)=>{
//     (err) ? console.log('error') 
//     :
//     console.log('hello this is a contente file')
// })

// let fileContente = fs.readFile('file.txt' , 'utf-8')

// console.log(fileContente)


