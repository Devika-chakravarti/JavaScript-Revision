// Using forin loop in this file:

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//======= Using forin loop to iterate throught the object in JavaScript ======
for (const key in myObject) {
    console.log(key);   // print the keys
}

console.log("============================================");

for (const key in myObject) {
    console.log(myObject[key]);    //print the values of the keys
}

console.log("============================================");

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);    //print the key-value pairs
}

console.log("============================================");

//======= Using forin loop to iterate throught the array in JavaScript ======
// Array ki key print houngi jb forin loop k use krenge starting from 0 upto n numbers
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key);   //print from 0 to 4
}

console.log("============================================");

for (const key in programming) {
    console.log(programming[key]);   //print values stored in array programming
}

console.log("============================================");

//======= Using forin loop to iterate throught the map in JavaScript ======
const map = new Map();
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
for (const key in map) {
    console.log(key);   //map isn't iteratable here in forin loop
}

console.log("============================================");