const name = "Devika"
const repoCount = 10

// console.log(name + repoCount + " Value")    //simple string concatenation not recommended, no readability

//Recommended -
//String interpolation: using backticks `` instead of double or single quotes '' ""
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)   

//Another way of declaring & initializing string in this way, we can get mulitple methods
//can see these methods in the console of brower by inspecting it & write below statement in the console
const gameName = new String('Devika-chak-2004')

//*****************Few methods of strings****************************
console.log(gameName[0])    //D
console.log(gameName.__proto__) //empty object
console.log(gameName.length)    //6
console.log(gameName.toUpperCase()) //DEVIKA: original value won't change as it is stored in stack and we'll get the copy of the gameName/it's value
console.log(gameName.charAt(2)) //v
console.log(gameName.indexOf('i'))  //3

//negative values can't be used: and starts from 0 only
const newString = gameName.substring(0, 4)
console.log(newString)  //Devi: last value isn't included

//negative values can be used: reverse order
const anotherString = gameName.slice(-8, 4)
console.log(anotherString)  //i

const newString1 = "        Devika chakravarti.       "
console.log(newString1)
console.log(newString1.trim())  //remove extra(strating and ending) spaces

const url = "https://devika.com/devika%95chak"
console.log(url.replace('%95', '-'))    //replace particular part of the string
console.log(url.includes("devika")) //whether particular string/character exists in the original string or not 
console.log(url.includes('annu'))   //false

console.log(gameName.split('-'))    //['Devika','chak','2004']