// let student = {
//     name : "Darin",
//     age: 21,
//     marks: 90
// };

const item = {
    price : 100,
    discount : 50,
    colors : ['red', "pink"]
};

let post = {
    username : 'darin',
    content : 'creator',
    likes : 1000,
    reposts : 100,
    tags : 102
};

let student = {
    name : "Darin",
    age: 21,
    marks: 90,
    city : "Mumbai"
};

student.city = 'Pune';
student.gender = 'Male';
student.marks = 'A';
delete student.gender;


const classInfo = {
    darin : {
        grade : "a",
        city : 'pune'
    },
    tanishka : {
        grade : 'a+',
        city : 'mumbai'
    }
}
// console.log(classInfo.tanishka.city);

// random integers


// console.log(Math.floor(Math.random() * 100) + 1);

let range = prompt("Enter maximum range: ");
let num = Math.floor((Math.random() * range) + 1);

let guess = prompt("Enter your guess: ");

while (guess != 'quit') {
if (guess == num) {
    console.log("Correct guess!");
} else {
    console.log("incorrect guess :( try again!");
}
guess = prompt("Enter your guess: ")
}






