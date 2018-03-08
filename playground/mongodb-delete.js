//const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');//don't proceed further
    }

    const db = client.db('TodoApp');

    console.log('Connected to MongoDB server.');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //findAndDelete
    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
        console.log(result);
    });

    client.close();
});