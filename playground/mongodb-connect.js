const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // insert Todos collection
    db.collection('Todos').insertOne({
        text: 'learn 2',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Failed insert collection');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // insert Todos collection
    // generate id by ourself with mongodb object, we can create id like 123 too
    let objId = new ObjectID();
    db.collection('Todos').insertOne({
        _id: objId,
        text: 'learn 2',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Failed insert collection');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Yanu',
        age: 24,
        location: 'Yogyakarta'
    }, (err, result) => {

        if (err) {
            return console.log('Failed to insert collection');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});
