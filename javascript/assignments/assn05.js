// q1 array element > number

let arr = [2, 4, 6, 8, 10];

function larger(arr, number) {
    
    for ( let i = 0; i <= arr.length; i ++) {
        if (arr[i] > number) {
            console.log(arr[i]);
        }
    }
    
    
}

// console.log(larger(arr, 4));

// let str = 'abcdabcdefgggh';
// let empty = '';


// for ( let i = 0; i < str.length; i ++) {
//     if (str[i] != empty[i]) {
//         empty = empty + str[i];
//     }
// }

// console.log(empty)

let names = ['australia', 'germany', 'united states of america'];
function country (names) {
    let maxlength = 0;
    let longest = "";
    for ( let i = 0; i < names.length; i ++) {
        if ( names[i].length > maxlength) {
            maxlength = names[i].length;
            longest = names[i];
        }
    }
    console.log(`max length is ${maxlength} of ${longest}`);
    
}

// country(names);

function vowels(str) {
    let count = 0;
    for ( let i = 0; i < str.length; i ++ ){
        if ( str[i] == 'a' ||
            str[i] == 'e' ||
            str[i] == 'i' ||
            str[i] == 'o' ||
            str[i] == 'u' 
        ) {
            count ++;
        }
    }

    return count;
}

// console.log(vowels('darin'));

function randomGenerator (start, end) {
    let num1 = Math.floor(Math.random() * start);
    let num2 = Math.floor(Math.random() * end);

    console.log(num1, num2);
}

randomGenerator(10, 20);