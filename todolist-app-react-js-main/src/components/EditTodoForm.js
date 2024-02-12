import React, { useState } from 'react';
import axios from 'axios';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task.id)

    try {
      const updatedTask = { task: value };
      await axios.put(`http://localhost:3000/dev/todos/${task.id}`, updatedTask);
      editTodo(value, task.id);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
