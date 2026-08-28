q1

let num = 2603;

if (num % 10 == 0 ) {
    console.log("good");
} else {
    console.log("bad")
}

q2

let name = prompt("What's your name? ");
let age = prompt("What's your age?")

alert(`${name} is ${age} years old.`)

q3
let quarter = 1;

switch(quarter) {
    case 1:
        console.log("Jan, Feb, March");
        break;

    case 2:
        console.log("Apr, May, June");
        break;
    
    case 3:
        console.log("July, Aug, Sep");
        break;
    
    case 4:
        console.log("Oct, Nov, Dec");
        break;

    default:
        console.log("Invalid input pls put valid input");
}

q4
let string = "asshole";

if((string[0] == 'a' || string[0] == 'A') && string.length > 5){
    console.log("Golden string");
} else {
    console.log("Not a golden string");
}

q5
let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the largest");
} else if ( num2 > num1 && num2 > num3) {
    console.log("num2 is the largest");
} else if ( num3 > num1 && num3 > num2) {
    console.log("num3 is the largest");
} else {
    console.log("invalid input");
}

let num1 = 32;
let num2 = 47852;

if ((num1 % 10) == (num2 % 10)) {
    console.log("Both the numbers have the same last digit");
} else {
    console.log("Both the numbers dont have the same last digit");
}