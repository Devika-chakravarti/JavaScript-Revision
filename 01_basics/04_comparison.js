/*
Number to number conversion
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
*/

//Shouldn't recommend to compare different datatype because of unpredictable results sometimes
console.log("2">1)  //js automatically convert this "2" string into number; Output: true
console.log("02">1) //Output: true

//Avoid null and undefined comparison
console.log("===========NULL============") 
console.log(null>0)     //false
console.log(null==0)    //false
console.log(null>=0)    //true; unpredictable result

console.log("===========UNDEFINED============")
console.log(undefined==0)   //false
console.log(undefined>0)    //false
console.log(undefined<0)    //false

console.log("===========STRICT CHECK============")
//=== : Strict check : will check not only the value but the datatype as well
console.log("2" === 2)  //false