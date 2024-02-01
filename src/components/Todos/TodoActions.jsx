import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

function TodoActions({ resetTodo, deleteCompletedTodos, completelTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completelTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoActions;
