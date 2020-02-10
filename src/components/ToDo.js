import React from 'react';

const ToDo = (props) => {
    const { todo, remove } = props;
  // Each Todo
  return (
    <li 
      onClick={() => {remove(todo.id);}}
      className="todo-item"
    >
      {todo.text}
    </li>);
};

export default ToDo;