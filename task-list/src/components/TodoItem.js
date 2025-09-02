import React from "react";
import styles from "../styles/TodoItem.module.css";

function TodoItem({ text, index }) {
  const backgroundClass = index % 2 === 0 ? styles.white : styles.gray;
  return <li className={`${styles.todoItem} ${backgroundClass}`}>{text}</li>;
}

export default TodoItem;

