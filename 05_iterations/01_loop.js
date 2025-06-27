// ====== for loop ======
// ctrl + D -> for selecting same variable in different places like renaming the index into i everywhere, jaha tk main chaahon karna

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);     
}
// Output: 0 to 9 value will be printed in separate lines

console.log("===========================");

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i == 5){
        console.log("5 is best number!!");
        continue;
    }
    console.log(element);     
}
// Output: 1 to 9 but in place of 5, it will print 5 is best number(because of continue keyword)

console.log("===========================");

for (let i = 0; i <= 3; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 3; j++) {
        // console.log(`Inner loop value: ${j} & inner loop ${i}`);
        console.log(i + ' * ' + j + ' = ' + i*j);   //multiplication op. in loop
    }
}
/*  Output: Outer loop value: 0
    Inner loop value: 0 & inner loop 0
    Inner loop value: 1 & inner loop 0
    Inner loop value: 2 & inner loop 0
    Inner loop value: 3 & inner loop 0
    and continues
    Inner loop 0 se 3 times mtlb 4 baar chlega and outer loop bhi 
*/

console.log("===========================");

for (let i = 1; i <= 5; i++) {
    console.log(`Table of ${i}:`);  // outer loop is for printing how many tables we want to print
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' * ' + j + ' = ' + i*j);   
    }
    console.log("================")
}
// Output: Table printing from 1 to 5

// ========== Array printing ============
let myArray = ["Flash", "Batman", "Superman"]
console.log(myArray.length);    // output: 3
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}
/* Output: Flash
           Batman
           Superman
*/

console.log("===========================");

/*
    -> break and continue keyword:
*/

console.log("Use of break statement!!!");
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("Detected 5");
        break;  // 1 to 4 only and then Detected 5; break keyword used for breaking control flow
    }
    console.log(`value of i is ${i}`);
}

console.log("===========================");

console.log("Use of continue statement!!!");
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue;   // print from 1 to 4 then Detected 5 and continues from 6 to 10 further complete execution
    }
    console.log(`value of i is ${i}`);
}
