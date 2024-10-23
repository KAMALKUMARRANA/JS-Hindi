// Premitive => call by value => copy data
// 7 type :"e",3,true,null,undefined,symbol=>unique,BigInit,

const score=20.3 // static

let userEmail=undefined
const id= Symbol('123')
const anotherid= Symbol('123')

console.log(id==anotherid) // false

const bigNumber=8454854854548584n
console.log(typeof bigNumber)


//Referenc Type => (Non Premitive)

// array,objects,function

const heros =["sk","ref","dog"] // array
let obj={
    name:"Kamal",
    age:22
}

// console.log(typeof heros)
console.log(typeof obj)

const myfunction=function(){
    console.log("Hello World!")
} // function object

const outSideTemp=null // object

myfunction()
console.log(typeof myfunction)

console.log(typeof outSideTemp)