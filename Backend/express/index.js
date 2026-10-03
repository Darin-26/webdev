const express = require('express');
const app = express();

// console.dir(app)

let port = 8080;

app.listen(port, () => {
    console.log('app is listening on port', port);
})

// app.use((req, res) => {
//     // console.log(req);
//     console.log('request received');
//     res.send('<h1>this is a basic response</h1>');
// })

app.get('/', (req, res) => {
    res.send('i am root');
});

app.get('/search', (req, res) => {
    let { q }  = req.query;
    res.send(`search results for query: ${q}`)
});

app.get('/:username', (req, res) => {
    let { username } = req.params;
    res.send(`Welcome to page of @${username}`);
});