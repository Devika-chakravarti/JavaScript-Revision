/*
    Truthy value -> Assuming any value to be True
    ; Rest of the values are truthy values
    ; "0" -> zero is written as a string inside double quotes, 
    'false' -> false is written as a string inside single quotes,
    " " ->  single space as a string inside double quotes,
    [] ->  empty array, {} -> empty object, function(){} -> empty function

    Falsy value -> Assuming any value to be False
    ; false, 0, -0, BigInt 0n, "", null, undefined, NaN(Not a Number) 

    -> POINT TO BE NOTED(General knowledge): 
        false == 0; true(Output)
        false == ''; true(Output)
        0 == ''; true(Output)
*/

const userEmail1 = "devika@gmail.com"    // Here, userEmail having assumed to be truthy value
if(userEmail1){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
// Output: Got user email

// If array founds to be empty, following way is to check it!
const userEmail2 = [];
if(userEmail2.length === 0){
    console.log("Array is empty");
}
// Output: Array is empty

// If object founds to be empty, following way is to check it!
const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
// Output: Object is empty

// =========== Nullish Coalescing Operator (??): works for null, undefined =============

let val1;

// val1 = 5 ?? 10;  //5
// val1 = null ?? 10   //10(not null)
// val1 = undefined ?? 15  //15(not undefined)
// val1 = null ?? 10 ?? 15;  //10

console.log(val1);  

// ========= Trenary operator: condition ? true : false =======

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");    
// Output: More than 80