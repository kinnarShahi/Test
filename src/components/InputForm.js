import React from 'react';

const InputForm = (props) => {
  // Keep track of the input element
  let input;
  const { addTodo, clearAll } = props;

  return (
    <div className="input-form">
      <div className="input-form-row">
        <label className="input-form-label">Enter a ToDo:</label>
        <input 
          ref={node => { input = node;}}
          className="todo-name-input"
        />
        <button 
          onClick={() => {
            addTodo(input.value);
            input.value = '';
          }}
          className="form-button form-button-add"
        >
          +
        </button>
      </div>
      <div className="input-form-row">
        <button
          onClick={() => {
            clearAll();
          }}
          className="form-button form-button-clear"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default InputForm;