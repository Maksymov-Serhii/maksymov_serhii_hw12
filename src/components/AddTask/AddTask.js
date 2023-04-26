import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./AddTask.module.css";
import Icon from "../Icon/Icon";

const AddTask = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      const item = {
        value: value,
        id: v4(),
      };
      props.onAddItem(item);      
    }
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles["input-form"]}>

      <input value={value} onChange={handleChange} type="text" placeholder="Add your new todo" className={styles["input-field"]} />
        
      <button className={styles["submit-button"]}>
        <Icon type="add" />
      </button>
        
    </form>
  );
}

export default AddTask;
