var mongoose = require('mongoose');


mongoose.Promise = global.Promise;//configuring to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Cook dinner 1',
    completed: true,
    completedAt: 20180304
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo', e);
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    email: 'testit@test.com'
});

newUser.save().then((doc) => {
    console.log('User saved: ', doc);
}, (e) => {
    console.log('Unable to save user', e);
});