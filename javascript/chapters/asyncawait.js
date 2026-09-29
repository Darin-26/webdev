// async function greet() {
//     throw '404 not found';
//     return 'hello';
// }

// greet()
// .then((result) => {
//     console.log('promise was successful');
//     console.log('result was: ', result)
// })
// .catch((err) => {
//     console.log('promise rejected with error: ', err)
//     console.log()
// })

// let demo = async () => {
//     return 5;
// }

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

// h1 = document.querySelector('h1')

// function changecolor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         h1.style.color = color;
//         resolve('color changed');
//     }, delay);
//     })
    
// }

// async function demo() {
//     await changecolor('red', 1000);
//     await changecolor('orange', 1000);
//     await changecolor('yellow', 1000);
//     await changecolor('blue', 1000);

// }

// let json = '{"fact":"Both humans and cats have identical regions in the brain responsible for emotion.","length":81}'

// let valid = JSON.parse(json)
// console.log(valid)

// let student = {
//     name : 'darin',
//     marks : 50
// }

// let news = JSON.stringify(student);
// console.log(news)

// let url = 'https://catfact.ninja/fact';

// fetch(url)
// .then((response) => {
//     console.log(response)
//     return response.json()
// })
// .then((data) => {
//     console.log(data.fact)
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log(data2.fact)
// })
// .catch((err) => {
//     console.log('error: ', err)
// })

let url = 'https://catfact.ninja/fact';

// async function getfact() {
// try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
// } catch (e){
//     console.log(e)
// }
// }
// getfact()

async function getfact() {
try {
    let res = await axios.get(url);
    return res.data.fact;
} catch (e){
    console.log(e)
}
}

let btn = document.querySelector('button')
let para = document.querySelector('p');

btn.addEventListener('click', async () => {
    let fact = await getfact();

    para.innerText = fact;
})