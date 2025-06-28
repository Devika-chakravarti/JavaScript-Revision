/*
    -> POINT TO BE NOTED:
    use forof loop to iterate through array and map.
    use forin loop to iterate through object.
*/


// ============ Array specific loops ==================

// [""."",""] -> Array of strings
// [{},{},{}] -> Array of objects

// ====== Use forof loop ========


// numeric array:
const arr = [1,2,3,4,5]
for (const num of arr) { //arr = object(in real syntax of forof loop) mtlb cheez naaki oops waala object
    console.log(num);
}
// Output: 1 2 3 4 5 in separate lines

console.log("================================");


// string array:
const greetings = "Hello!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// Output: Each char is H (and upto ! in separate lines)

console.log("================================");


// ================Maps(it is also an object, holds key-value pairs, won't allow duplicate values)=====================================
const map = new Map();
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
/*
    Output: 
    Map(3) {
        'In' => 'Inida',
        'USA' => 'United States of America',
        'Fr' => 'France'
    }
*/

console.log("================================");

// for (const key of map) {   //because of this line of code
    for (const [key, value] of map) {   //because of this line of code
    // console.log(key);   //print separate arrays of key-value pairs
    console.log(key, ' : ', value); //print key values pairs not in array format
}
/*
    Output:
    In : India
    USA : United States of America
    Fr : France
*/

console.log("================================");

// object array: forof loop doesn't work to iterate the object, will use some other to iterate
const myObject = {  //myObject is not iterable here
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ' : ', value); //myObject is not iterable here
}

