// IIFE: Immediately Invoked Function Expressions
/*
    IIFE: function that executes immediately also to remove the global scope polutions(read about it!!)
    (): first () is for function definition, (): second is for function execution call
    Function is simple wrapped in a () and then just outside it, there is () like in function calling/invoking.
    In this case(for writing multiple IIFE in a single program), ';' semi colon is required at the end of the statement.
*/

// USING SIMPLE IIFE AS SIMPLE FUNCTIONS
(function chai(){
    //named IIFE
    console.log('FIRST DB CONNECTED');  //FIRST DB CONNECTED
})();

(function aurcode(){
    console.log('SECOND DB CONNECTED'); //SECOND DB CONNECTED
})();

// USING IIFE WITH ARROW FUNCTION
( () => {
    //simple iife
    console.log("THIRD DB CONNECTED")   //THIRD DB CONNECTED
} )();

( (name) => {
    //parameterized iife
    console.log(`Hello, ${name}`)   //Hello, Devika
} )('Devika');