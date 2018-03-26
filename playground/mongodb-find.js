const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed: true}).toArray().then(result => {
    //     console.log(result);
    // }, err => console.log('Unable to fetch data'));

    // let id = new ObjectID('5ab4a9295350b84debb72295');
    // db.collection('Todos').find({_id: id}).toArray().then(result => {
    //     console.log(result);
    // }, err => console.log('Unable to fetch data'));

    // db.collection('Todos').find({completed: true}).count().then(count => {
    //     console.log(`count todos: ${count}`);
    // }, err => console.log('Unable to fetch data'));

    db.collection('Users').find({age: {$gt: 25}}).toArray().then(result => {
        console.log(result);
    }, err => console.log('Unable to fetch data'));
});
