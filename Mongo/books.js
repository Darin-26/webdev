const mongoose = require('mongoose');

main()
    .then(() => {
        (console.log('connection successful')
    )}) 
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0,
    },
})

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "gone girlr3onr3rno3ri3rb3rui3bro3brbbor3bro",
    author: "RD Sharma",
    price: 1100,
});
book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});