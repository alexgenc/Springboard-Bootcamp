import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos);
  
  const handleCreate = (task) => {
    dispatch({
      type: 'ADD_TODO',
      task
    });
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      id
    });
  }

  const allTodos = todos.map(todo => (
    <Todo 
      deleteTodo={handleDelete}
      id={todo.id}
      key={todo.id}
      task={todo.task}
    />
  ));

  return (
    <div>
      <hr />
      <NewTodoForm createTodo={handleCreate} />
      <hr />
      <ul>{allTodos}</ul>
    </div>
  )

  
}

export default TodoList;