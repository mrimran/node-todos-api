//const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');//don't proceed further
    }

    const db = client.db('TodoApp');

    console.log('Connected to MongoDB server.');

    //findAndUpdate
    db.collection('Todos').findOneAndUpdate(
        {completed: false}, 
        {$set: {text: 'Something which is false'}},
        {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });

    client.close();
});