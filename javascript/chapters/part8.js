// function hello() {
//     console.log('inside hello function')
//     console.log('hello')
// }

// function demo() {
//     console.log('calling hello function')
//     hello()
// }

// console.log('calling demo function')
// demo();

// console.log('done, bye!')


// let a = 25;
// console.log(a)
// let b = 10;
// console.log(b)
// console.log(a+b)

// setTimeout(() => {
//     console.log('apna college');
// }, 2000);

// console.log('hello.....')

h1 = document.querySelector('h1')

function changecolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve('color changed');
    }, delay);
    })
    
}
 
changecolor('red', 1000, () => {
    changecolor('orange', 1000, () => {
        changecolor('green', 1000, () => {
            changecolor('yellow', 1000)
        })
    });
});

// function savetoDB(data, success, failure) {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if ( speed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDB(
// 'apna college',
// () => {
//     console.log('success: your data was saved ');
//     savetoDB(
//         'hello world',
//         () => {
//             console.log('success2: data2 saved');
//         },
//         () => {
//             console.log('failure2: weak connection')
//         }
//     )
// },
// () => {
//     console.log('failure: weak connection. data not saved')
// });

  

// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//         let speed = Math.floor(Math.random() * 10) + 1;
//         if ( speed > 4) {
//             resolve('success: data was saved');
//         } else {
//             reject('failure: weak connection');
//         }
//     });
// }

// savetoDB('apna college')
// .then((result) => {
//     console.log('data1 saved. promise was resolved');
//     console.log(result)
//     return savetoDB('helloworld');
// })
// .then((result) => {
//     console.log('data2 saved');
//     console.log(result)
//     return savetoDB('darin');
// })
// .then((result) => {
    
//      console.log('data3 saved')
//      console.log(result)
// })
// .catch((error) => {
//     console.log('promise was rejected');
//     console.log(error)
// })

