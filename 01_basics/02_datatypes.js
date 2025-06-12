//Treat all Js code as newer version
"use strict"; 

/*
This can be used in console of the browser as there is software attached to it which executes Js files
but here in nodejs, we can't use alert like this
alert(3+3)
*/

let name = "Devika"
let age = 18
let isLoggedIn = false
let state;

/*PRIMITIVE DATATYPES:
number -> 2 to power 54
bigint
string -> ""
boolean -> true/false
null -> standalone value
undefined -> value not assigned yet to the variable
symbol -> mostly useful in react/individual components/uniqueness
*/

//OBJECT

//will tell the type of value. Example: Devika is of string datatype
console.log(typeof "Devika")
console.log(typeof null)      //output: object(null is an object)
console.log(typeof undefined)     //output: undefined(undefined is a type)