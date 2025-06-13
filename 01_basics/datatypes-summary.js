//*********PRIMITIVE DATATYPES*********

// 7 types(call by value means copy of that value is given whenver try to fetch from memory)
// String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)   //false: since Symbol is used for uniqueness

const bigNumber = 98329888839998287239n //using n: automatically converted into BigInt



//**********REFERENCE/NON-PRIMITIVE DATATYPES*********

// Arrays, Objects, Functions: (typeof function)

const heros = ["shaktiman","naagraj","doga"]    //Array

let myObj = {                                   //Object: in key: value pair
    name: "Devika",
    age: 21
}

const myFunction = function(){
    console.log("Hello, Devika")
}

console.log(typeof bigNumber)   
console.log(typeof outsideTemp) //Output: Object instead of null: there is a reason
console.log(typeof myFunction)  //Output: function
console.log(typeof heros)   //Output: object
console.log(typeof myObj)   //Output: object

/*
****************NOTE********************
JavaScript is a dynamic language and not static, which means that variables can hold values
of different types during runtime. Unlike languages such as Typescript or
Java, you don't need to declare the data type of a variable explicitly.
*/