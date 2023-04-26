import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import styles from './TodoApp.module.css';
import Counter from '../Counter/Counter';

const TodoApp = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddListItem = (item) => {
    const updatedList = (prevList) => [item, ...prevList];
    setList(updatedList);
  }

  const handleDeleteListItem = (id) => {
    const updatedList = (prevList) => prevList.filter(item => item.id !== id);
    setList(updatedList);
  }  
 
  return (
    <div className={styles["todo-app"]}>
      <Header listCount={list.length} appName="Todo App" />
      <Counter count={count} setCount={setCount} />
      <AddTask onAddItem={handleAddListItem} />
      <TodoList list={list} onDeleteListItem={handleDeleteListItem} />
    </div>
  );
}

export default TodoApp;
