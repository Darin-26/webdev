let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let square = arr.map((element) => {
//     return element * element;
// })

// let sum = square.reduce((ans, el) => {
//     return ans + el;
// })

// let avg = sum / arr.length;
// console.log(`Squares of the array elements are ${square} \n
//     Sum of the squared array elemets is ${sum} \n
//     Average of the squared array is ${avg}`);

// let newarr = arr.map((element) => {
//     return element + 5;
// })

// console.log(newarr);

// let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// let newchar = char.map((element) => {
//     return element.toUpperCase();
// });

// console.log(newchar);

let doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((c) => c * 2),
];

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

let mergeObject = (obj1, obj2) => ({...obj1, ...obj2});
mergeObject({a:1 , b:2}, {c: 3, d:4});






