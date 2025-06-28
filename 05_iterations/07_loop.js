// Using map() which is an array method that performs an iteration over each element of an array in js

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums1 = myNumbers.map( (num) => num + 10)  //no return keyword is used here because there is no {}/scope opened
const newNums2 = myNumbers.map( (num) => {return num + 10}) //scope is open here, that is why return keyword is used
console.log(newNums1)    //[11,12,13,14,15,16,17,18,19,20]
console.log(newNums2)    //[11,12,13,14,15,16,17,18,19,20]



// Method Chaining, which is a technique or programming style rather than a specific method or operator.

const newNums = myNumbers
        .map( (num) => num * 10 )
        .map( (num) => num + 1 )
        .filter( (num) => num >= 40 )
console.log(newNums)    //[11,21,31,41,51,61,71,81,91,101]
console.log(newNums)    //[41,51,61,71,81,91,101]

