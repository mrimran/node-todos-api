//const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');//don't proceed further
    }

    const db = client.db('TodoApp');

    console.log('Connected to MongoDB server.');

    db.collection('Todos').find({_id: new ObjectId('5a9962004d4a7a0baf49ef34')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    client.close();
});