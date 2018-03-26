const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // // deleteMany
    // db.collection('Todos').deleteMany({text: 'learn 2'}).then(result => console.log(result));

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'learn 2'}).then(result => console.log(result));

    // // findeOneAndDelete
    // objId = new ObjectID('5ab4a93c6480204e017c8a37');
    // db.collection('Todos').findOneAndDelete({_id: objId}).then(result => console.log(result));

    // client.close();
});
