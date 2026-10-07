// basic for loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Reverse loop

for (let i = 5; i > 0; i--) {
    console.log(i);
}

// Odd Numbers

for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Even numbers

for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Multiplication table

let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(n, " * ", i, " = ", n * i);
}

// Nested Loops

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

// while loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// guessing game

let favMovie = "Avatar";

let guess = prompt("What is your guess? ");

while (guess != favMovie && guess != "quit") {
    guess = prompt("What is your guess? ");
}

// break keyword

let i = 1;

while (i <= 5) {
    if (i == 3) {
        break;
    }

    console.log(i);
    i++;
}

// loops + arrays

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Nested Arrays + Nested Loops

let heroes = [
    ["ironaman", "spiderman", "thor"],
    ["superman", "batman", "flash"]
];

console.log(heroes.length);

for (let i = 0; i < heroes.length; i++) {
    console.log(`list ${i}`);

    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}

// for...of

let fruits = ["mango", "apple", "banana", "orange", "litchi"];

for (let fruit of fruits) {
    console.log(fruit);
}

for (let char of "apnacollege") {
    console.log(char);
}