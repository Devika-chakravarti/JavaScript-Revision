// ********************* CONVERSION OF DATATYPES *********************

let score = "33abc"   //in case of null, in case of undefined, in case of boolean value true/false, in case of string

//typeof keyword is used to tell the type of the variable
// console.log(typeof score)
// console.log(typeof(score))

// Conersion operations: value is converted but not correctly as "33abc" should have type of string not number
// console.log(typeof valueInNumber2)    //Output: number, in case of null: 0, in case of undefined: NaN, in case of true/false: 1/0, in case of string: NaN
// console.log(valueInNumber2)           //(Not a Number)Nan: type 

//"33" -> 33
//"33abc" -> NaN
//true -> 1, false -> 0

let isLoggedIn = 1       //in case of empty string: ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)    //Output: true, in case of empty string: false

//1 -> true, 0 -> false
//"" -> false
//"Devika" -> true

let someNumber = 33;
// let stringNumber = String(someNumber)
// console.log(stringNumber)              //number converted into string datatype
// console.log(typeof stringNumber)       //string type




// *********************** OPERATIONS ********************

let value = 1
let negValue = -value
// console.log(negValue)

/*
console.log(2+2)    //addition
console.log(2-2)    //subtraction
console.log(2*2)    //multiplication
console.log(2**2)   //2 to the power 2
console.log(2/2)    //division
console.log(2%2)    //modulus or remainder used in cryptography and algos
*/

let str1 = "hello"
let str2 = " devika"
let str3 = str1 + str2; 
// console.log(str3) //string concatenation

// console.log("1" + 2)    //12
// console.log(1 + "2")    //12
// console.log("1" + "2")  //12
// console.log("1" + 2 + 2)    //confusion; Output: 122(after string simple addition won't go until parenthese)
// console.log(1 + 2 + "2")    //confusion; Output: 32(number additon and then concatenation)

// console.log(+true)  //not recommended but will give Output: 1
// console.log(+"")    //not recommended but will give Output: 0(empty string)

let num1, num2, num3
num1 = num2 = num3 = 2+2    //not consistent/confusing/least readibility but surely will give output: 4
// console.log(num1)

let gameCounter = 100
gameCounter++   //postfix op
++gameCounter   //prefix op
console.log(gameCounter)    //Output: 101(incremented value of gameCounter)