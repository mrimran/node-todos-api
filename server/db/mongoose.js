var mongoose = require('mongoose');

var DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'

mongoose.Promise = global.Promise;//configuring to use promises
mongoose.connect(DB_URI);

module.exports = {mongoose}