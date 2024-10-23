const name="Kamal"
const repoCount=10

console.log(name +" "+ repoCount) // not prefer

console.log (`Hello ${name} and value ${repoCount}`) // string interpolation => preferable

const gameName =new String("Hello-hc") 
console.log(gameName)
console.log(gameName.length)
console.log(gameName[0])

console.log(gameName.__proto__)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('l'))

const newString=gameName.substring(0,4) // 0 -->3
console.log(newString)

const anotherString=gameName.slice(-8,4) // use negative and show reverse value
console.log(anotherString)

const newStr1="  kamal  "
console.log(newStr1.trim())

const url="https://test.com/demo%20name"
let changeUrl=url.replace('%20','-')
console.log(changeUrl)

console.log(url.includes('demo'))

let data="1-2-3-4-5"
console.log(data.split('-')) // array type
