import React from "react";
import styles from "./Header.module.css";

const Header = ({ appName, listCount }) => {
  return (
    <header className={styles.header}>
      <h2>{appName}</h2>
      <p>You have {listCount} Todos</p>
    </header>
  )
}

export default Header;
