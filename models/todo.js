const mongoose = require('mongoose');

const TodoListSchema = mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  description: {
    type:  String,
    required: true
  },
  priority: {
      type: String,
      required: true,
      enum: ['High', 'Medium', 'Low']
  }
});

const TodoList = module.exports = mongoose.model('TodoList', TodoListSchema);

//TodoList.find() returns all the lists
module.exports.getAllTodos = (callback) => {
  TodoList.find(callback);
}

//insert the document into MongoDB
module.exports.addTodo = (newTodo, callback) => {
  newTodo.save(callback)
}

//remove by id
module.exports.deleteTodoById = (id, callback) => {
  let query = {_id: id};
  TodoList.remove(query,callback)
}