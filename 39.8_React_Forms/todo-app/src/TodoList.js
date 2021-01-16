import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    let newTodo = {...todo, id: uuidv4()}
    setTodos( (todos) => [...todos, newTodo]);
  }

  const removeTodo = (id) => {
    setTodos( (todos) => todos.filter(todo => todo.id !== id ));
  };

  const allTodos = todos.map(todo => (
    <Todo 
      key = {todo.id}
      id = {todo.id}
      task = {todo.task}
      handleRemove = {removeTodo}
    />
  ));

  return (
    <div>
      <div>
        <NewTodoForm addTodo={addTodo} />
      </div>  
      <div>
        {allTodos}
      </div>  
    </div>
  )
}

export default TodoList;