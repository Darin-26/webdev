const student = {
    name : 'darin',
    age : 21,
    eng : 95,
    math : 93,
    phy : 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}
// getAvg();

// console.log("hello");
// console.log("hello");
// let a =1; 
// try {
//     console.log(a);
// } catch (error) {
//     console.log("caught an error... a is not defined");
//     console.log(error);
// }
// console.log("hello2");
// console.log("hello2");

let sum = (a, b) => {
    console.log(a+b);
};

// sum(1,2);

const cube = (n) => {
    console.log(n * n * n);
}

// cube(4);

const power = (a,b) => {
    console.log( a ** b );
} 

// power(2,4);

const mul = (a, b) => (
    a * b
)

// mul(2,2);

// console.log("hi there");

// setTimeout(() => {
//    console.log("Apna College"); 
// }, 4000);

// console.log("Welcome to");

// let id = setInterval(() => {
//     console.log("APna College");
// }, 2000);

// console.log(id);
// clearInterval(id);

const stud = {
    name : 'darin',
    marks : 95,
    prop : this,
    getName : function() {
        return this.name;
    },

    getMarks : () => {
        console.log(this);
        return this.marks;
    },

    getinfo1 : function () {
        setTimeout ( function() {
            console.log('this')
        }, 2000);
    },

    getinfo2 : function () {
        setTimeout ( () => {
            console.log('this')
        }, 2000);
    },
}

// console.log(stud.prop);

let square = (number) => {
    return number * number;
}
console.log(square(4));

let id = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);
