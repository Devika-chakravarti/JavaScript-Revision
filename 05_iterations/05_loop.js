const coding = ["js","ruby","java","python","cpp"]

// using normal function
coding.forEach( function (item) {   //function is call back function here which means won't have any name
    console.log(item);      //print all the values stored in the array
} )

console.log("==================================");

// using arrow funtion
coding.forEach( (item) => {       //function is call back function here which means won't have any name
    console.log(item);      //print all the values stored in the array
} )

console.log("==================================");

// using by defining function here and then printing values of the array
function printMe(item){
    console.log(item);
}
coding.forEach(printMe) //giving here reference of printMe function here(not caaling the funtion like printMe())

console.log("==================================");

// forEach loop has access of 3 parameters: item, index and arr
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);  //print: values in array, indexes from 0 to n, then whole array
} )

console.log("==================================");

// Iteration through the array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName); //print the language names(stored in array as objects) in separate lines
})

// THIS ALL WILL HELP IN THE DATABASE WORK!!!