//********************ARRAY********************

//storing collection of multiple items under a single variable name
//Array of Js is resizable and can contain mix of diffnt datatypes
//Js arrays are zero-indexed
//Js array-copy operations create shallow copies(also leanr about deep copy)

//=======BASICS OF ARRAY(Array initialization and declaration)==========
console.log("=====================BASICS OF ARRAY=====================")
const myArr = [0, 1, 2, 3, 4, "Devika", true]
const myHeros = ["Shaktiman", "Naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0])
console.log(myHeros[0])
console.log(myArr2[0])
console.log("====================push() & pop()======================")

//======ARRAY METHODS=========

//push() & pop()
myArr.push(6)   //inserts value at the end
myArr.push(7)
myArr.pop()     //deletes the last value
console.log(myArr)
console.log("=====================unshift() & shift()=====================")

//unshift() & shift()
myArr.unshift(9);   //adds element to the starting
myArr.shift();    //removes element from starting
console.log(myArr)
console.log("======================includes() & indexOf()====================")

//includes() & indexOf()
console.log(myArr.includes(9))    //false(as 9 isn't present)
console.log(myArr.indexOf(9))     //-1(as 9 isn't present so no index)
console.log("======================join()====================")

//join()
const newArr = myArr.join()
console.log(myArr)    //type: array;  [0, 1, 2, 3, 4, 'Devika', true, 6]
console.log(newArr)   //type: string;  0,1,2,3,4,Devika,true,6
console.log("======================slice() & splice()====================")

//slice() & splice(): for interview pov important 
const arr = [0,1,2,3,4,5]
console.log("Original array ", arr)

const n1 = arr.slice(1,3)
console.log("Sliced part of original array: ", n1)
console.log("Array after using slice() ", arr)    //remains same as original array

const n2 = arr.splice(1,3)
console.log("Spliced part of original array: ", n2)
console.log("Array after using splice() ", arr)   ////spliced part of array gets deleted from the orinial array

