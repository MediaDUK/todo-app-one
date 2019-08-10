// We’ll declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const controllerTodo = require('./controllers/todos');
const app = express();
const port = 3000;

// connect to DB
mongoose.connect(config.database, { useNewUrlParser: true })


//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send("Test page");
})

//Routing all HTTP requests to /todos to todosController
app.use('/todos', controllerTodo)

//Listen to port 3000
app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});