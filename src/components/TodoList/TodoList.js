import React, { useState } from "react";
import styles from "./TodoList.module.css";
import Icon from "../Icon/Icon";

const TodoList = (props) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleDelete = (id) => {
    props.onDeleteListItem(id);
  }

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <ul className={styles.list}>
      {props.list.map(item => {
        const { id, value } = item;
        const isChecked = checkedItems[id] || false;
        const listItemClassName = isChecked ? styles["list-item-checked"] : styles["list-item"];

        return (
          <li key={id} className={listItemClassName}>
            <div className={styles["checkbox-container"]}>
              <input type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(id)} />
            </div>
            <p className={styles["list-item-paragraph"]}>{value}</p>
            <button
              className={styles["delete-button"]}
              onClick={() => handleDelete(id)}
            >
              <Icon type="delete" />
            </button>
          </li>
        )
      })}
    </ul>
  );
}

export default TodoList;
