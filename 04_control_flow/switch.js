/*
    -> switch case SYNTAX:

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

// For duplicating rows; Press shift + alt + down arrow
// Reason why we are using break statement after every case, because if one condition founds to be true then all remaining conditions/cases will
// gonna execute which is not needed/not required output

// const month = "march" //March; will be the output
const month = 3    //March; will be the output
switch (month) {                    //switch(month){    case "jan": console.log("January"); break;  }
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Default case match!!");
        break;
}       

