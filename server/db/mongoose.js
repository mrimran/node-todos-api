var mongoose = require('mongoose');


mongoose.Promise = global.Promise;//configuring to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}