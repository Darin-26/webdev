const mongoose = require('mongoose');

main()
    .then(() => {
        (console.log('connection successful')
    )}) 
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema( {
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({name: "Peter"}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

// User.findOneAndUpdate({name: "Bruce"}, {age: 35}, {new: true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })


// User.find({age: {$gt: 47}}).then((res) => {
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name: 'Tony', email: 'tony@gmail.com', age: 30},
//     {name: 'Peter', email: 'peter@gmail.com', age: 31},
//     {name: 'Bruce', email: 'bruce@gmail.com', age: 32},
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age: 42,
// })

// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
