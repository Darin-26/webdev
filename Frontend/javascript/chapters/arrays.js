// Arrays

let students = ["darin", "tanishka"];
console.log(students[1]);

// Array length

let nums = [2, 4, 6, 8, 10];
console.log(nums.length);

// Changing array elements

let fruits = ["mango", "banana", "apple"];
fruits[0] = "changed";
fruits.push("strawberry");
fruits.pop();
fruits.unshift("straberry");
let removed = fruits.shift();
console.log(removed);
console.log(fruits);

// concat()

let months = ["january", "july", "march", "august"];
let nums = [1, 2, 3, 4];
console.log(months.concat(nums));

// Array methods

months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months.includes("july1"));
console.log(months.reverse());
console.log(months.slice(2));

// splice() and sort()

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
colors.splice(4);
colors.splice(0, 1);
colors.splice(0, 1, "black", "grey");
colors.sort();
console.log(colors);

// Practice — months

let months = ["january", "july", "march", "august"];
months.splice(0, 1);
months.splice(1, 0, "june");
console.log(months);

// reverse() + indexOf()

let arr = ["C", "c++", "html", "javascript", "python", "java", "c#", "sql"];
arr.reverse();
console.log(arr.indexOf("javascript"));

// 2D Array

let xox = [
    ["x", null, "o"],
    [null, "x", null],
    ["o", null, "x"]
];
console.log(xox);
xox[0][1] = "o";


