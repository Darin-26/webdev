const { faker } = require('@faker-js/faker')
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'mysqlroot'
})

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

const port = 8080;

app.listen(port, () => {
    console.log('server is listening on port ', port);
})

app.get('/', (req, res) => {
    let q = 'select count(*) from user';
    try {
    connection.query(q ,  (err, result) => {
    if(err) throw err;
    let output = result[0]['count(*)'];
    res.render('home.ejs', {output});
} );
} catch (err) {
    console.log(err);
    console.log('some error');
}
});

app.get('/user', (req, res) => {
    let q = 'select id, username, email from user';
    try {
        connection.query(q, (err, result) => {
            if ( err ) throw err;
            let user = result;
            res.render('showusers.ejs', {user});
        });
    } catch (error) {
        res.send('some error occured');
    }
});

app.get('/user/:id/edit', (req, res) => {
    let {id} = req.params;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if ( err ) throw err; 
            let user = result[0];
            res.render('edit.ejs', {user}); 
        });
    } catch (error) {
        res.send('some error occured');
    }
});

app.patch('/user/:id', (req, res) => {
    let {id} = req.params;
    let {password: formpass, username:  newusername} = req.body;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if ( err ) throw err; 
            let user = result[0];
            if ( formpass != user.password) {
                res.send('wrong password');
            } else {
                let q2 = `update user set username='${newusername}' where id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect('/user');
                })
            }
            
        });
    } catch (error) {
        res.send('some error occured');
    }
});
    





// let q = 'insert into user (id, username, email, password) values ?';

// let data = [];
// for ( let i = 1; i <= 100; i ++) {
//     data.push(getRandomUser());
// }
 
// try {
//     connection.query(q , [data],  (err, result) => {
//     if(err) throw err;
//     console.log(result);
// } );
// } catch (err) {
//     console.log(err);
// }

// connection.end();