import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ToDoApp />, document.getElementById('root'));
registerServiceWorker();
