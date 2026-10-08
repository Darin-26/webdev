function personMaker(name,  age ) {
    const person = {
        name: name,
        age: age,
        talk: function() {
            console.log('hi, my name is ', this.name);
        },
    };

    return person;
}

// let p1 = personMaker('darin', 21);
// console.log(p1)

