import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
    </div>
  );
}

export default App;
