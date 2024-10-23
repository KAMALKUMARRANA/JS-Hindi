console.log(2>=1);

console.log("2">1) // Please must be compare with same data type.
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null<0)
console.log(null>=0) // => true
// the reson that an equal == and comparision > < >=, <= work differently.
// comparision convert null to a number, trate as 0, i.e, null>=0 is true and null >0 false

console.log(undefined>=0) // => all time false 

console.log("2" ===2) // it strictly check
console.log("2" ==2) //it convert the datatype string to number