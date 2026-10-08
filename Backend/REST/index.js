const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({extended: true}));

let posts = [
    {
        id: "1a",
        username: 'apnacollege',
        content : 'ilovecoding'
    },
    {   
        id: "2b",
        username: 'darin',
        content : 'ilovetanishka'
    },
    {   
        id: "3c",
        username: 'tanishka',
        content : 'ilovedarin'
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/posts', (req, res) => {
    res.render('index.ejs', {posts});
})

app.get('/posts/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/posts', (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect('/posts');
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/posts/:id', (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.send('request working');
})



app.listen(port, () => {
    console.log('listening to 8080');
})