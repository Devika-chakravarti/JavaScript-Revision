//============USING CONSTRUCTORS FOR DECLARING OBJECTS(singleton objects)============

const tinderUser1 = new Object()    //singleton object
const tinderUser2 = {}              //non-singleton object
console.log(tinderUser1)     //{} will give empty object
console.log(tinderUser2)     //{} also give empty object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Annu"
tinderUser.isLoggedIn = false
console.log(tinderUser)    //{id: '123abc', name: 'Annu', isLoggedIn: false}

const regularUser = {           //nested objects: objects created inside objects
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Annu",
            lastname: "Singh"
        }
    }
}
console.log(regularUser.fullname)    //{userfullname: {firstname: 'Annu', lastname: 'Singh}}
console.log(regularUser.fullname.userfullname)    //{firstname: 'Annu', lastname: 'Singh}
console.log(regularUser.fullname.userfullname.firstname)    //Annu
// console.log(regularUser.fullname?.userfullname.firstname)  Further we'll be using this concept which tells us that if this particular data exists or not

//================COMBINING OBJECTS================

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const obj4 = {...obj1, ...obj2, ...obj3}    //we'll use this way of combining objects: using spread operator/function
// const obj4 = Object.assign({}, obj1, obj2, obj3)   //{} resultant object in which the combined object(source object) will get stored otherwise the merged values will get stored in the obj1
// const obj4 = {obj1, obj2, obj3}    //nested objects: issue/problem
console.log(obj4)    

/*
    Whenever the data comes from database, then we'l have array of objects
*/
const users = [
    {
        id: 1,
        email: "devika@gmail.com"
    },
    {
        id: 2,
        email: "annusingh@gmail.com"
    }
]
console.log(users[0].email)     //accessing the oth indexed object

//=====================Again using tinderUser object===========
console.log(tinderUser)
console.log(Object.keys(tinderUser))    //WIDELY USED: give only the array of keys as output
console.log(Object.values(tinderUser))  //WIDELY USED: give only the array of values as output
console.log(Object.entries(tinderUser)) //VERY LESS IN USE: give the array of arrays containing key value pairs separately id with it's value and etc
console.log(tinderUser.hasOwnProperty('isLoggedIn'))   //true: will tel the property availability

//==============DESTRUCTURING OF OBJECTS(useful in react, and many other concepts)==================

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh sir"
}

//Many ways to show the info/value from object
console.log(course.courseInstructor)    //way1: commonly used

console.log(course["courseInstructor"]) //way2

//This {} brackets means in below line is destructuring the object
const {courseInstructor: Instructor} = course   //way3: mostly used(here we named courseInstructor to just Instructor)
console.log(Instructor)

//=============CONCEPT OF APIs===================

/*
    API calling JSON file m hoti h aajke time mein(whenever we try to take values from backend)
    JSON(JavaScript Object Notation) file basically objects jaisi hi hoti h without name and usme key bhi "" ke andar likhe jaate h
    kabhi kabhi API jo hai woh Array of objects k format m bhi hoti
    sometimes, we can't understand the JSON file's data(so there're websites[JSON formatter] as well where we simply can paste our JSON's file data and understand)
*/

// for reference study: Random user me API generator