// Stack(used in primitive type)(call by value/will get copy of the value)
// Heap(used in non-primitive type)(call by reference/will get original value)

//Stack memory(uses string primitve type here)
let myYoutubename = "artesy"
let anothername = myYoutubename
anothername = "iCapturedIt"

console.log(myYoutubename)  //Output: artesy(original value won't change as it is stored in stack and we'll get only the copy of it)
console.log(anothername)    //Output: iCapturedIt(made changes on given copy of the value)


//Heap memory(uses object non-primitive type here)
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "devika@gmail.com"
console.log(userOne.email)  //Output: devika@gmail.com(original value is changed because we got the reference/original value not the copy of it)
console.log(userTwo.email)  //Output: devika@gmail.com