let inp = document.querySelector('input');
let button = document.querySelector('button');
let items = document.querySelector('ul');

button.addEventListener('click', () => {
    let value = inp.value;
    let newval = document.createElement('li');
    let del = document.createElement('button');
    del.innerText = 'delete';
    del.classList.add('delete');
    newval.innerText = value;
    items.append(newval);
    newval.append(del);
    inp.value = "";
    
})

items.addEventListener('click', () => {
    console.log('clicked ')
})

// let delbtns = document.querySelectorAll('.delete');
// for ( btns of delbtns ) {
//     delbtns.addEventListener('click', () => {
//         let par = this.parentElement;
//         par.remove();
//     })
    
// }


