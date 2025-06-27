// ======================= while and do-while loop ========================

// while loop ==================

// using while loop for printing

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2;
}
// output: printing from 0, 2, 4, 8, 10(difference between numbers are of 2 because of incremental condition)

console.log("==============================");

let myArray = ['Flash', 'Batman', 'Superman']
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
// output: printing all three names stored in myArray

console.log("==============================");




// do-while loop ====================

let score = 11
do{
    console.log(`Score is ${score}`);
    score++;
}while(score <= 10);
// output: Score is 11(even if the condition is false, once the loop will get executed)