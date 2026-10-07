let newinput = document.createElement('textarea');
let btn = document.createElement('button');
let newh1 = document.createElement('h1');
let newp = document.createElement('p');



newh1.innerText = 'DOM Practice';
document.querySelector('body').append(newh1);

newh1.style.textDecoration = 'underline';
newh1.style.color = 'purple';

newp.innerHTML = 'Apna College <b>Delta</b> Practice';
document.querySelector('body').append(newp);

btn.innerText = 'Click me';

newinput.placeholder = 'Username';
btn.id = 'btn';

document.querySelector('body').append(newinput, btn);

let button = document.querySelector('#btn');

button.style.backgroundColor = 'blue';
button.style.color = "white";


