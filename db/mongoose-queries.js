const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a9e904241695775f3746e6b';

if(!ObjectId.isValid(id)) {
    console.log('Id is not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found.');
    }
    console.log('TodoById', todo);
}).catch((e) => console.log(e));

//get user 
//User.findById
var userId = '5a9e9e03dbab4dc6b2113e72';
User.findById(userId).then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(user);
}).catch((e) => console.log(e));