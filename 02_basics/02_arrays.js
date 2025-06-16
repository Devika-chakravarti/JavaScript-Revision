//PRE-REQUISITE: FOR RUNNING ANY PART OF CODE, JUST COMMENT ALL OTHER PART!!!

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

/*
After pushing one array into another, there is problem that the second array
will consider as an separate element in the existing array
*/
console.log("=============Pushing one array into another(push())============")
marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(marvel_heros[3][1]) //flash

/*
After concatenating two arrays, new array will be created and then
there will all the elements of two array will present
*/
console.log("=============Concatenating two array(concat())============")
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

/*
Programmers generally use spread method for merging two arrays in Js
*/
console.log("===========Using spread method===================")
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

/*
flat() method is used to remove internal arrays in arrays and this method
makes all elements exist in a single array
*/
console.log("===========Using flat() method===================")
const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //infinite is taken when number of internal arrays not known
console.log(real_another_array)

console.log("===========Using Array.isArray() method===================")
console.log(Array.isArray("DEVIKA"))    //false: DEVIKA isn't an array

console.log("===========Using Array.from() method===================")
console.log(Array.from("DEVIKA"))       //will simple from an array containing all the elements/alphabets separately
console.log(Array.from({name: "devika"}))   //[]: will return empty string, key:value pair -> INTERESTING FROM INTERVIEW POV & PROJECT

/* converting separate variables into array */
console.log("===========Using Array.of() method===================")
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //[100, 200, 300]