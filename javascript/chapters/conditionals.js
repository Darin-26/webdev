// 02 — Conditionals

let age = 17;

if (age >= 18) {
    console.log("adult");
} else {
    console.log("ma chuda");
}

// Traffic light

let color = "red";

if (color == "red") {
    console.log("stop");
}

if (color == "yellow") {
    console.log("go slow");
}

// Voting

let age = 23;

if (age >= 18) {
    console.log("You can vote");
} else if (age < 18) {
    console.log("You cannot vote");
}

// Grades

let marks = 10;

if (marks >= 80) {
    console.log("a");
} else if (marks >= 60) {
    console.log("b");
} else if (marks >= 33) {
    console.log("c");
} else {
    console.log("fail");
}

// T-shirt size

let size = "s";

if (size == "xl") {
    console.log("rs 250");
} else if (size == "l") {
    console.log("rs 200");
} else if (size == "m") {
    console.log("rs 100");
} else {
    console.log("rs 50");
}

// Good String — Practice

let string = "asshole";

if (string[0] === "a" && string.length > 3) {
    console.log("Good string");
} else {
    console.log("Bad String");
}

// Truthy value

if (1) {
    console.log("true value");
} else {
    console.log("false value");
}

// Switch

let color = "green";

switch (color) {
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("slow down");
        break;

    case "green":
        console.log("go");
        break;

    default:
        console.log("do whatever");
        break;
}

// Switch with day

let day = "3rw";

switch (day) {
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("wednesday");
        break;

    default:
        console.log("do whatever");
        break;
}

// Prompt

let prn = prompt("Please enter your prn number");

console.log(prn);