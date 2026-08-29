//  let arr = [1, 2, 3, 4, 5];

 let print = function(el) {
    console.log(el);
 }
 
 let student = [
    {
        name : 'darin',
        marks : 95
    },
    {
        name : 'tanishka',
        marks : 99
    },
     {
        name : 'tanu',
        marks : 89
    }
 ]
 
 let gpa = student.map((el) => {
    return el.marks / 10;
 }) 
// arr.forEach((student) => {
//     console.log(student);
// });

let num = [1 ,2, 3, 4];

let double = num.map((el) => {
    return el * 2;
})

// console.log(double)

// let nums = [1, 2, 3, 4, 7, 8, 9, 10];

// let ans = nums.filter((el) => {
    // return el % 2 == 0;
// })

// console.log(ans);

// [2,4,6,8].every((el) => {
//     el % 2 == 0;
// })

// let nums = [1, 2, 3, 4];
// let finalvalu = nums.reduce((res, el) => res + el);
// console.log(finalvalu);

let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1];

let ans = nums.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
})
// console.log(ans);

let nums2 = [1, 2, 3, 4, 5, 10, 4, 90, 100];
let multi10 = nums2.filter((arr) => {
    return ((arr % 10) == 0 );
});

// console.log(multi10);

let min = nums2.reduce((min, el) => {
    if (el > min ) {
        return min;
    } else {
        return el;
    }
});

// console.log(min)

function sum(a, b=3) {
    return a + b;
}

// console.log(sum(2));

let eg = [1,2,3,4,5,6,7,8,9,10];
// console.log(...eg);

let arr2 = [1, 2, 3, 4];
let newarr = [...arr2];

// console.log(newarr);

// i did not understand wtf is rest
function sumnew (...args) {
    return args.reduce((sum, el) => sum + el);
}
// console.log(arguments);
// sumnew();

let names = ['tony', 'bruce', 'peter', 'steve']
// let winner = names[0];
// let runnerup = names[1];
// let secrunnerup = names[2];


let [winner, runnerup, secrunnerup] = names;
// console.log(winner); 

const student3 = {
    name : 'karan',
    age : 14,
    class : 9,
    subjects : ['hindi', 'english', 'math', 'science'],
    username : 'karan@123',
    password : 'abcd'
};

let {username , password } = student3;
console.log(username);


