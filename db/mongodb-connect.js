//const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');//don't proceed further
    }

    const db = client.db('TodoApp');

    console.log('Connected to MongoDB server.');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: true
    }, (err, result) => {
        if(err) {
            return console.log("Unable to insert todo", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});