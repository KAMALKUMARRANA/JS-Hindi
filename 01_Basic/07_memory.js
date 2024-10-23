// Stack => Premittive (by value), 


let myComName="PowerBook"

let anotherName=myComName
anotherName="PowerFx" // copy and override the older value

console.log(anotherName)
console.log(myComName)


//Heap => Non-Premitive (reference)

let user1={
    email:"user@gmail.com",
    upi:"user@ibl"
}
let user2=user1 // store the referance

user2.email="test@gmail.com" // changing all referance

console.log(user1.email)
console.log(user2.email)