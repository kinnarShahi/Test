import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<ToDo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul className="todo-list">{todoNode}</ul>);
}

export default ToDoList;