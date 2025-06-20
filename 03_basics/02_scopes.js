/*
    {}: means scope whenever used with function or if-else and many other places,
    don't make it confuse with {} using with object, that is just object declaration not scope concept.
*/

// var c = 300 //global scope
let a = 300
if(true){   //block-level scope: this shouldn't go outside the block but this happened when using var
    let a = 10;
    const b = 20;
    console.log("Inner value of a(Block scope): ", a);   //10
    // var c = 30  //c = 30
}
console.log("Outer value of a(Global scope): ", a); //300
// console.log(a); //a isn't defined; when globally a was not defined
// console.log(b); //b isn't defined
// console.log(c); //30; problem arised here
console.log("===================================")

//============Scope in nested functions===============
function one(){
    const username = "Devika"
    function two(){
        const website = "Youtube"
        console.log(username)   //this will get executed
    }
    // console.log(website)    //website is not defined
    two()   //Devika
}
one()   //no output
console.log("===================================")

//===============Scope in if condition==================
if(true){
    const username = "Devika"
    if(username === "Devika"){
        const website = " youtube"
        console.log(username + website) //Devika youtube: output
    }
    // console.log(website)    //website is not defined
}
// console.log(username)   //username is not defined
console.log("===================================")

//===============Interesting concept==================

function addOne(num){       //addOne is function
    return num + 1
}
addOne(5)   //no printing statement; when this line of code moves above the function declaration, there will be no error

// addTwo(5)       //can not access 'addTwo' before initialization
const addTwo = function(num){       //addTwo might called as expression/function; function declaration where a variable is holding that function
    return num + 2
}
addTwo(5)   //no printing statement; when this line of code moves above the functions declaration, there will be error

//===Hoisting concept===