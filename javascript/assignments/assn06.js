let arravg = (arr) => {
    let sum = 0;
    let avg = 0;
    for ( let i = 0; i < arr.length; i ++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

arr = [2, 4, 6, 8, 10, 12, 14];
// console.log(arravg(arr));

let isEven = (number) => {
    let even = true;
    if(number % 2 == 0) {
        even = true;
        console.log(`${number} is even`)
    } else {
        even = false;
        console.log(`${number} is not even`)
    }

    // console.log(`${number} is even`)
    return even;
}

isEven(10);
