// let inp = document.querySelector('input');

// inp.addEventListener('mouseout', function() {
//     console.log('mouse entered and went out');
// })

// inp.addEventListener('keypress', function() {
//     console.log('key was pressed');
// })

// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;
//     console.log(`User has scrolled ${scrolledPixels}px down the page.`);
// })

// window.addEventListener('load', (event) => {
   
//     console.log(`loaded`);
// })

// let mybutton = document.createElement('button');
// mybutton.innerText = 'click me';

// document.body.append(mybutton);

// mybutton.addEventListener('click', () => {
//     mybutton.style.backgroundColor = 'green';
// })

let h2 = document.querySelector('h2');
let inp = document.querySelector('input');

inp.addEventListener('keyup', () => {
    inp.value = inp.value.replace(/[^a-zA-Z ]/g, "")
    h2.innerText = inp.value;
})
