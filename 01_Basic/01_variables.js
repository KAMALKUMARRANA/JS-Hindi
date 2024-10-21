const accountId=100394934 // Not Changing
let accountEmail="test@gmail.com"
var accountPassword="1234"
accountCity="Kolkata" // not prefer

let accountState;


//accountId=2 // not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail="demo@hmail.com"
accountPassword="9094"
console.log(accountId)

console.table([accountId,accountEmail,
    accountPassword,accountCity,accountState])
