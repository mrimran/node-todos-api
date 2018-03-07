const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a9ea87f78748a1adf9dd4e9';

//Todo.remove();//will remove everything from Todo collection

//Todo.findOneAndRemove();

//Todo.findByIdAndRemove();

// Todo.findByIdAndRemove(id).then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id: '5a9eb5e5327fba2e81743cc6'}).then((todo) => {
    console.log(todo);
});