//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const todolist = require('../models/todo');

//GET HTTP method to /todos
router.get('/', (req, res) => {

  // All callbacks in Mongoose use the pattern: callback(error, result). If an error occurs executing the query, the error parameter will contain an error document, and result will be null. If the query is successful, the error parameter will be null, and the result will be populated with the results of the query.
  todolist.getAllTodos((err, todos) => {
    if (err) {
      res.json({ success: false, message: `Failed to load all todos. Error: ${err}` });
    } else {
      res.write(JSON.stringify({ success: true, todos: todos }, null, 2));
      res.end();

    }
  });
});

//POST HTTP method to /todos
router.post('/', (req, res, next) => {
  const newTodo = new todolist({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority
  });
  todolist.addTodo(newTodo, (err, todo) => {
    if (err) {
      res.json({ success: false, message: `Failed to create a new todo. Error: ${err}` });
    } else {
      res.json({ success: true, message: "Added successfully." });
    }

  });
});

//DELETE HTTP method to /todo:[id:int]
router.delete('/:id', (req, res, next) => {
  //id of the todo to be deleted
  const id = req.params.id;
  console.log('id :', id)
  //Call the model method deleteListById
  todolist.deleteTodoById(id, (err, todo) => {
    if (err) {
      res.json({ success: false, message: `Failed to delete the todo. Error: ${err}` });
    } else if (todo) {
      res.json({ success: true, message: "Deleted successfully" });
    } else {
      res.json({ success: false });
    }
  })
})

module.exports = router;