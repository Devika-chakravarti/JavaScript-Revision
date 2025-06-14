//***************************** NUMBERS ************************************

const score = 400
console.log(score);  //400
console.log(typeof(score))  //number type
console.log("==============================================")

const balance = new Number(100) 
console.log(balance);    //[Number: 100]
console.log(typeof(balance))    //object type
console.log("==============================================")

console.log(balance.toString());    //converted to string type
console.log(typeof(balance))    //object type
console.log("==============================================")

console.log(balance.toString().length); //no. of characters in 100 is 3
console.log("==============================================")

console.log(balance.toFixed(2));    //100.00
console.log("==============================================")

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)) //123.9
console.log("==============================================")

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))   //Indian number system  10,00,000
console.log("*********************************************")

//***************************** MATHS ************************************

console.log(Math)   //Object [Math] {}
console.log(Math.abs(-4))   //4: absolute value of -4 and 4 is 4
console.log(`Round off value of 4.2 is ${Math.round(4.2)}`)    //4
console.log(Math.ceil(4.2)) //5: ceiling value
console.log(Math.floor(4.9)) //4: floor value
console.log(Math.min(4, 3, 7, 12)) //3
console.log(Math.max(4, 3, 7, 12)) //12
console.log("=============================================")

console.log(Math.random())  //between 0 and 1 inclusively means including 0 and 1(or as well as any decimal value)
console.log(Math.floor(Math.random()*10)+1)   //value vary from 0 to 9(lowest value/floor value)

const min = 10
const max = 20

//===========================================================
//NOTE: Formula for finding random/generating random numbers
console.log(Math.floor(Math.random() * (max - min + 1)) + min)