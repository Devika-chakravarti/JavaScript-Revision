/*
    From the previous lecture of the series of chai aur JavaScript: Read about how JavaScript code works?
    global execution phase(referred by this keyword), memory phase, execution phase, memory context and execution context.
    Call stack: follows LIFO principle, the last called function will get moved out first from the stack.
*/

// ===========if statement==============

// comparison operator: <, >, <=, >=, ==, !=, !==, ===(checks the type as well i.e. 2 === "2"; false because of int and string type)

if(2 == "2"){
    console.log("EXECUTED") //EXECUTED; true condition
}

if(2 === "2"){
    console.log("EXECUTED") //no output; false condition
}

const temperature = 41
if(temperature < 50){
    console.log("Less than 50");    //less than 50
}else{
    console.log("Greater than 50");
}
// console.log("EXECUTED");  //This line of code will definitely be executed, independent from the if condition.

// ====== scope understanding in conditionals ======
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);    //power isn't defined; local scope inside the condtional statement

// ======= shorthand notation of if statement =======
const balance = 1000
if(balance > 500) console.log("TEST");  //TEST

if(balance < 500){
    console.log("Less than 500");
}else if(balance < 750){
    console.log("Less than 750");
}else if(balance < 900){
    console.log("Less than 750");
}else{
    console.log("Less than 1200");  //Less than 1200
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");    //Allow to buy courses
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in!!");
}



