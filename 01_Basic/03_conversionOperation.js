let score="100abc"


console.log(typeof(score))

let valueInNumber=Number(score) // type conversion => string to number
console.log(typeof valueInNumber)
console.log( valueInNumber) // NaN => type - not occured strick check
//in case of null convert value in number is 0
//in case of undefined convert value in number is 0

//"100" => 33
// "100abc" =>Nan
//true => 1
//undefined => NaN

let isLoggedIn=1

let booleanISLoggedIn=Boolean (isLoggedIn)

console.log(booleanISLoggedIn)

//1 => true
//""=>false
//"data"=>true
//0=>false
let scorej=10
let data=String(scorej)
console.log(typeof data)

