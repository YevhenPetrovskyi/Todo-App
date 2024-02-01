import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/Todos/TodoForm';
import TodoActions from './components/Todos/TodoActions';

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

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(({ isCompleted }) => !isCompleted));
  };

  const completedTodosCount = todos.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
    </div>
  );
}

export default App;
