/*
    Objects & Events: this is what matters most in JavaScript
*/

//======================OBJECT==============================
//Object declaration can be done like a consturctor and literal

/*  
    Singleton -> Whenever by using constructor we create object, then 
    object will be singleton.
    In case of literals it is just opposite, no singleton object(instead multiple instances)
*/

//Object.create   //This what object creation by using construction is

//=====================OBJECT LITERALS=========================

const mySym = Symbol["key1"]    //try to add this mySym to the object as a key

//OBJECT CREATION AND DECLARATION(by using object literal)
const JsUser = {        //simply object is created({}: empty object)
    name: "Devika",      //by default system consider name as a string even without writing it inside ""
    "full name": "Devika chakravarti", 
    [mySym]: "mykey1",
    age: 21,
    location: "Udaipur",
    email: "devika@microsoft.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"] 
}   

//==============HOW TO ACCESS OBJECTS(. notation(mostly used) and [""] using this notation(fewer cases when we use this))=================
console.log(JsUser.email)   //this will work but not right way to access objects
console.log(JsUser["email"])  //this is recommended
// console.log(JsUser."full name")  //this will give error if we use that not recommened way
console.log(JsUser["full name"])    //this'll give right output
console.log(JsUser[mySym])  //mykey1: type of mySym is Symbol not string

//==============HOW TO CHANGE VALUE OF OBJECTS==========================
JsUser.email = "devika@gmail.com"
// Object.freeze(JsUser)    //simply freeze the ojbect which means no further changes can be done
JsUser.email = "devika@chatgpt.com"  //won't change  
console.log(JsUser)

//=============ADDING FUNCTION===============
// In Js, function is just treated as simple variable
JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)        //referencing name from the object
}                                                     //this keyword is used, for referencing the same object and then we'll have all the properties of that object

console.log(JsUser.greeting)    //[Function (anonymous)]: function isn't executed, only got the reference
console.log(JsUser.greeting())  //Hello JS user
console.log(JsUser.greetingTwo())
