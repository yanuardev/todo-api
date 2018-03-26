const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ab4a50dbf02464be1c79d0c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( result => console.log(result));

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5ab4b0ce0488a253d45b7358')
    // }, {
    //     $set: {
    //         name: 'Oke'
    //     },
    //     $inc: {
    //         age: 2
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => console.log(result));

    // client.close();
});
