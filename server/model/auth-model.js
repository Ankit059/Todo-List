const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;




