// Date Object in JavaScript represents a single moment in time in a platform-independent format

let myDate = new Date()
console.log(typeof(myDate)) //object type
console.log(myDate) //somewhere output is not in understandable form
console.log(myDate.toString())  //little bit in understandable format but not completely
console.log(myDate.toDateString())  //Sat Jun 14 2025
console.log(myDate.toLocaleString())    //6/14/2025, 6:51:59 AM


console.log("========================================================")


let myCreatedDate = new Date(2025, 6, 14)   //Month starts from 0 in JavaScript
console.log(myCreatedDate.toDateString())   //Mon Jul 14 2025: One month exceeded from mentioned in the statement
console.log(myCreatedDate.toLocaleString())   //7/14/2025, 12:00:00 AM(default timing if not mentioned manually)

let myCreatedDate2 = new Date(2025, 6, 14, 4, 10)   //Timing is mentioned manually here
console.log(myCreatedDate2.toLocaleString())    //7/14/2025, 4:10:10 AM

let myCreatedDate3 = new Date("2025-01-14") //YYYY-MM-DD
console.log(myCreatedDate3.toLocaleString())    //1/14/2025 12:00:00 AM (the way we write in our copy/manually)

let myCreatedDate4 = new Date("01-14-2025") //MM-DD-YYYY(Mostly followed in India)
console.log(myCreatedDate4.toLocaleString())    //1/14/2025 12:00:00 AM


console.log("========================================================")


let myTimeStamp = Date.now();    //basically used in quiz timings who submitted first/last(in these kind of situations)

console.log(myTimeStamp)    //output will be in milliseconds(too large value)
console.log(myCreatedDate.getTime())    //another date converted into milliseconds

//convert that milliseconds value in seconds(smaller value)
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)    //2025-06-14 (YYYY-MM-DD date format)
console.log(newDate.getMonth() + 1) //6(june); + 1 because Js starts counting month from 0
console.log(newDate.getDay())   //6(saturday)

//customized format of toLocaleString() function
console.log(newDate.toLocaleString('default',{  //values will be displayed on clicking: ctrl + space
    weekday: "long"                //Output: Saturday
}))