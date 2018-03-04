var mongoose = require('mongoose');


mongoose.Promise = global.Promise;//configuring to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    }, 
    completed: {
        type: Boolean
    }, 
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner',
    completed: true,
    completedAt: 20180305
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo', e);
})