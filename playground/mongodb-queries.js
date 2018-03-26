const {ObjectID} = require('mongodb');

const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');

const _id = '5ab91b215ac5012ac60fb5e1'; // valid
// const _id = '6ab91b215ac5012ac60fb5e1'; // valid but not found
// const _id = 'xx5ab91b215ac5012ac60fb5e1'; // not valid

if (!ObjectID.isValid(_id)) {
    console.log('ID not valid');
    process.exit();
}

// return array
Todo.find({_id}).then(todos => console.log(todos), err => console.log(err));

// find with any key and return single object
Todo.findOne({_id}).then(doc => console.log(doc), err => console.log(err));

// find with id and return single object
Todo.findById(_id).then(doc => {
    if (!doc) {
        return console.log('Todo not found');
    }
    console.log(doc);
}, err => console.log(err));
