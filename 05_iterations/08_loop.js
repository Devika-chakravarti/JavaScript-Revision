/*
    reduce() method in javascript: array method that executes a provided "reducer" callback
    function on each element of the array, resulting in a single output value. It iterates 
    through the array elements, accumulating a single result based on the logic defined in the callback function. 
*/

const myNums = [1,2,3]

// using simple function
const myTotal1 = myNums.reduce(function (acc, currval) { //acc -> accumulator, currval -> currentvalue
    console.log(`acc: ${acc} & currval: ${currval}`);   //will print values stored in acc and currval
    return acc + currval
}, 0)   //0 is given to the accumulator as an initial value 

console.log(myTotal1);   //6; sum of all values in the array

// using arrow function
const myTotal2 = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal2);  //6; same answer as above


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);    //22996; sum of all the prices of the courses available in the array named shoppingCart