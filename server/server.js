const express = require('express');

const bodyParser = require('body-parser');

let mongoose = require('./db/mongoose');

let Todo = require('./models/todo');
let User = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Todo App!');
});

app.post('/todos', (req, res) => {

    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then(doc => res.send(doc), e => res.status(400).send(e));
});

app.post('/user', (req, res) => {

    let user = new User({
        email: req.body.email
    });
    user.save().then(doc => res.send(doc), e => res.status(400).send(e));
});

// start server
app.listen(3000, () => {
    console.log('Server up and running.');
});

module.exports = app;
