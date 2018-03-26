const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let mongoose = require('./db/mongoose');

let Todo = require('./models/todo');
let User = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {

    Todo.find().then(todos => res.send({todos}), err => res.status(400).send(err));
});

app.get('/todos/:id', (req, res) => {

    let id = req.params.id

    // validate id
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findById(id).then(todo => {
        // not found
        if (!todo) {
            return res.status(404).send();
        }
        // found
        res.send({todo});
    }).catch(err => res.status(400).send());
});

app.post('/user', (req, res) => {
``
    let user = new User({
        email: req.body.email
    });
    user.save().then(doc => res.send(doc), e => res.status(400).send(e));
});

// start server
app.listen(port, () => {
    console.log(`Server up at ${port}`);
});

module.exports = app;
