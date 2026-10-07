function hello(name) {
    console.log("hello ", name );
}

// hello('darin');

function printPoem () {
    console.log('twinkle twinkle little star how i wonder what u are');
}

// printPoem();

function dice () {
    console.log("rolling.....\n")
    let num = Math.floor((Math.random() * 6) + 1 );
    console.log("Number on dice is ", num);
}

// for ( let i = 1; i <= 6 ; i ++ ) {
//     dice ();
// }


function printInfo ( name, age ) {
    console.log(`Your name is ${name} and age is ${age}`);
}

// printInfo('Darin', 21);

function average (num1, num2, num3) {
    let avg = Math.ceil((num1 + num2 + num3) / 3);
    console.log(avg);

}

// average(32,241,143);

function multiplication (number) {
    for ( let i = 1; i <= 10; i ++) {
        console.log(number, " * ", i , " = " , number * i );
    }
}

// multiplication(18);

function sum (a , b) {
    return a + b;
}

// console.log(sum(3,4));

function sum (num) {
    let ans = 0;
    for ( let i = 1; i <= num ; i ++) {
        ans = ans + i;
    }
    return ans;
}

// console.log(sum(276));

let str = ['hi', 'hello', 'bye', '!'];

function concat(str) {
    let result = "";

    for ( let i = 0; i < str.length; i ++) {
        result = result + str[i];
    }

    return result;
}

// concat(str);

let name = 'darin';

let sum1 = function(a,b) {
    return a + b;
}

// console.log(sum1(1,2));

function multipleGreet (func, count) {
    for ( let i = 1; i <=count; i ++) {
        func();
    }
}
let greet = function() {
    console.log("hello");
}

// multipleGreet(greet, 5 );

let calculator = {
    add : function (a, b) {
        return a + b;
    },
    sub : function (a, b) {
        return a - b;
    },
    mul : function (a, b) {
        return a * b;
    }
};

// console.log(calculator.add(1,8));

function oddEvenTest ( request ) {
    if ( request == "odd") {
        return function (n) {
            console.log(!(n%2 == 0));
        }
    } else if ( request == "even ") {
        return function (n) {
            console.log( n % 2 == 0)
        }
    }
    else {
        console.log("invalid request");
    }
}

let request = "odd";
oddEvenTest(request);










