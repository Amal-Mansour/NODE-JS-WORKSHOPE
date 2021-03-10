// // work with uuid 
// let uuid = require('uuid')

// let users =[
//     {
//         name: 'amal', 
//         lastname:'mansour' , 
//         id: uuid.v4() // v4  genere plusieur id site web plusieur methode
//     },

//     {
//         name:'sabrin',
//         lastname:'ben salah',
//         id:uuid.v4()
//     }
// ]

// console.log(users)

// process and yargs
// process ==> Aarry evry element added it push in the array the indexe 0 and 1 not importante we start from indexe 2==>[2]

// console.log(process.argv[2])

// we should installe yargs

let yargs = require('yargs')

// console.log(yargs.argv)
console.log(yargs.argv._[2])