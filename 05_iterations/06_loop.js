// Using filter() iterative method of the Array.prototype in js here ===============================

const coding = ["js","ruby","java","python","cpp"]

// forEach loop doesn't return any value(undefined)
const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
} )
console.log(values);    //undefined

console.log("=====================================");

const myNums = [1,2,3,4,5,6,7,8,9,10];
// forEach doesn't return any value whereas filter does return values
const newNums1 = myNums.filter( (num) => num > 4)     //filter also takes call back function
console.log(newNums1)    //[5, 6, 7, 8, 9, 10]

console.log("=====================================");

const newNums2 = myNums.filter( (num) => {
    num > 4;    //after writing return num > 4; work perfectly print 5 to 10 in an array
} )
console.log(newNums2);  //[]; empty array

console.log("=====================================");

// using forEach loop here for same work done by using filter: 
const newNums3 = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums3.push(num)
    }
} )
console.log(newNums3)   //[5, 6, 7, 8, 9, 10]

