const {ObjectId} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
    _id: userOneId,
    email: 'test1@test.com',
    password: 'test1',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}, {
    _id: userTwoId,
    email: 'test2@test.com',
    password: 'test2',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();//promise 1
        var userTwo = new User(users[1]).save();//promise 2

        return Promise.all([userOne, userTwo]);//Wait for both promises and when done return them
    }).then(() => done());
};

//seeding database so it has data always
const todos = [{
    _id: new ObjectId(),
    text: 'First test todo',
    _creator: userOneId
}, {
    _id: new ObjectId(),
    text: 'Second test todo',
    completed: true,
    completedAt: 5000,
    _creator: userTwoId
}];

const populateTodos = (done) => {//run some code before every test-case
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};