//declaring constant(can't change it's value in future)
const accountId = 144553        

/*
Both let & var can be used for declaring variables(prefer not to use var)
Issue in block scope and functional scope(in using var)
More often we'll use the let keyword
*/
let accountEmail = "devika@google.com"     
var accountPassword = "12345"

//not recommended but can be write as below format to declare a variable
accountCity = "Jaipur"

//no need of semicolon(;) in JavaScript
//value if not initialized, then output will be undefined
let accountState;

// accountId = 2 (not allowed as the accountId is of constant[const] datatype)

accountEmail = "hehe@google.com"
accountPassword = "98765"
accountCity = "Bengaluru"

console.log(accountId);

//Each and every variable and it's value in a tabular format(indexing starting from instead of variables name in the table)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])