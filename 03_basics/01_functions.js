//====================FUNCTION(PART1)=========================

/*
    Function basically means wrapping something and then reuse it wherever we want.
*/ 

//=============Function definition/syntax============
function sayMyName(){
    console.log("D")
    console.log("E")
    console.log("V")
    console.log("I")
    console.log("K")
    console.log("A")
}

sayMyName   //reference of function: no output
sayMyName() //execution of function
console.log("======================================");

//===========Adding two numbers(using console.log)====================
function addTwoNumbers(num1, num2){ //Parameters: value given while function definition
    console.log(num1 + num2)
}

// addTwoNumbers() //NaN; since no arguments
// addTwoNumbers(3, "4")   //34; not correct(string concatenation)
// addTwoNumbers(3, null)  //3; since datatype isn't assigned
// addTwoNumbers(3, 4) //Arguments: value passes while calling function

const result = addTwoNumbers(3, 4) //Arguments: value passes while calling function
console.log("Result: ", result)   //undefined: output
console.log("======================================");

//=============Using return statement============
function addTwoNumbers1(num1, num2){ //Parameters: value given while function definition
    let result1 = num1 + num2
    return result1      //return num1+num2: this can be directly written
}
const result1 = addTwoNumbers1(3, 5)
console.log("Result1: ", result1)   //8: output
console.log("======================================");

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage()) //undefined just logged in
console.log(loginUserMessage(""))   // just logged in
console.log(loginUserMessage("Devika")) //Devika just logged in
console.log("======================================");

function loginUserMessage(username){    //username = "sam" : fault values
    if(username === undefined){     //if(!username) same statement
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()) //Please enter a username 
console.log(loginUserMessage("Devika")) //Devika just logged in
console.log("======================================");

//====================FUNCTION(PART2)=========================

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500))  //200: output(value of num1 = 200 only)
console.log("======================================");

function calculateCartPrice1(...num1){  //using rest or spread operator
    return num1
}
console.log(calculateCartPrice1(200, 400, 500)) //[200, 400, 500]: array of values
console.log("======================================");

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 400, 500, 2000))  //[500, 2000]: output because val1 = 200, val2 = 400 and rest of the values stored int the ...num1
console.log("======================================");

//============Passing object to the function==================
const user = {
    username: "Devika",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)  //username is Devika and price is 199
handleObject({         //username is Annu and price is 599
    username: "Annu", 
    price: 599
})      

//============Passing array to the function==================
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //400: output
console.log(returnSecondValue([200, 400, 500, 1000]));  //400: output
