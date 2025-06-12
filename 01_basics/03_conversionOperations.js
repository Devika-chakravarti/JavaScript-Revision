let score = "33abc"   //in case of null, in case of undefined, in case of boolean value true/false, in case of string

//typeof keyword is used to tell the type of the variable
console.log(typeof score)
console.log(typeof(score))

//Conersion operations: value is converted but not correctly as "33abc" should have type of string not number
console.log(typeof valueInNumber2)    //Output: number, in case of null: 0, in case of undefined: NaN, in case of true/false: 1/0, in case of string: NaN
console.log(valueInNumber2)           //(Not a Number)Nan: type 

//"33" -> 33
//"33abc" -> NaN
//true -> 1, false -> 0

let isLoggedIn = 1       //in case of empty string: ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)    //Output: true, in case of empty string: false

//1 -> true, 0 -> false
//"" -> false
//"Devika" -> true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber)              //number converted into string datatype
console.log(typeof stringNumber)       //string type