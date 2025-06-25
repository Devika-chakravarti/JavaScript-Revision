//==============Usage of 'this' keyword===============

// 'this' keyword is used for referring current context/values of code/program.
// arrow function can't contain 'this' -> myth; But  

const user = {
    username: "Devika",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this);   //used for referring current context/value/variable
    }
}

// user.welcomeMessage //no value
user.welcomeMessage()   //Devika, welcome to website
/* current context/value
{
    username: 'Devika',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
*/
user.username = "Annu"
user.welcomeMessage()   //Annu, welcome to website; refering to current username because of previously used this keyword
/* current context/value
{
    username: 'Annu',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
*/

// console.log(this);  //{}; In node environment, this refers to empty object because there is no global context
                    //Window; In browser, the global object is Window object

function chai1(){
    let username = "Devika";
    // console.log(this);  // In node environment, when we print this keyword inside function then output is too large/long
    console.log(this.username); //undefined
}
chai1()

const chai2 = function(){
    let username = "Devika"
    console.log(this.username)  //undefined; same output as above, same working but the syntax is the only difference or else search it by yourself!!
}
chai2()

//================Usage of arrow function '=>'==============

const chai3 = () => {    //function keyword is removed from here and we'll give the parameter in the (), itherwise the overall function definiton is same
    let username = "Devika"
    console.log(this.username)  //undefined; same output as above, same working but the syntax is the only difference or else search it by yourself!!
}
chai3()

//================Discussion on pure arrow function'=>'============

// arrow function: () => {}

// ====PEHLA TAREEKA====
const addTwo =(num1, num2) => {
    return num1 + num2;  //return keyword is necessary
}
console.log(addTwo(5,6));   //11

// ====DUSRA TAREEKA====
const addTwo1 = (num1, num2) =>  num1 + num2;  //11; no need to write/use return keyword
const addTwo2 = (num1, num2) =>  (num1 + num2);  //11; no need to write/use return keyword
const addTwo3 = (num1, num2) => ({username: "Devika"})   //{username: 'Devika'}; returning object using arrow function
console.log(addTwo(5,6));   //11


