// let arr = [7 , 9, 0, -2];
// let n = 3;

// console.log(arr.slice(0, n));

// console.log(arr.slice(arr.length - n));

// let str = " ";

// if (( str == " ") || ( str == "") ){
//     console.log("empty string");
// } else {
//     console.log("not empty string");
// }

// let str = "chaRacter";
// let index = 3;

// if (str[index] == str[index].toLowerCase()) {
//     console.log("in lowercase");
// } else {
//     console.log("not in lowercase");
// }

// let str = "    hellow      ";

// console.log(str.trim());

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let key = 1;

for ( let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == key) {
        console.log(`element exists at index ${i}`);
        break;
    } else {
        console.log("element does not exist");
        break;
    }
}
