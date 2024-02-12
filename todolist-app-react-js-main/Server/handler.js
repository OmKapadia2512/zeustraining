const fs = require('fs');

const getTodos = () => {
  delete require.cache[require.resolve('./data/todo-data.js')];
  return require('./data/todo-data');
};

module.exports.addTodo = async (event) => {
const todos=require('./data/todo-data');

  console.log("add todos")
  const body = JSON.parse(event.body);
  const id = body.id || Date.now().toString();
  const newTodo = {
    id: id,
    task: body.task,
    completed: body.completed || false,
    isEditing: body.isEditing || false
  };

  todos.push(newTodo);
  console.log(todos)
  fs.writeFileSync('./data/todo-data.js', `module.exports = ${JSON.stringify(todos, null, 2)};`);

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo)
  };
};



module.exports.getAllTodos = async () => {
  try {
    console.log("Fetching todos...");
    const todos = getTodos();
    console.log(todos);

    return {
        statusCode: 200,
        body: JSON.stringify(todos)
    };
} catch (error) {
    console.error('Error fetching todos:', error);

    return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' })
    };
}
};



module.exports.updateTodo = async (event) => {
  const todos=require('./data/todo-data');
  const id = event.pathParameters.id;
  const body = JSON.parse(event.body);

  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Todo not found" })
    };
  }

  const updatedTodo = {
    id: id,
    task: body.task || todos[index].task,
    completed: body.completed || todos[index].completed,
    isEditing: body.isEditing || todos[index].isEditing
  };

  todos[index] = updatedTodo;
  fs.writeFileSync('./data/todo-data.js', `module.exports = ${JSON.stringify(todos, null, 2)};`);
  

  return {
    statusCode: 200,
    body: JSON.stringify(updatedTodo)
  };
};

module.exports.deleteTodo = async (event) => {
const todos=require('./data/todo-data');

  const id = event.pathParameters.id;
console.log("delete")
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Todo not found" })
    };
  }

  const deletedTodo = todos.splice(index, 1)[0];
  fs.writeFileSync('./data/todo-data.js', `module.exports = ${JSON.stringify(todos, null, 2)};`);


  return {
    statusCode: 200,
    body: JSON.stringify(deletedTodo)
  };
};
