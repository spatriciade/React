import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

function TodoList({ todos }) {
  return (
    <ListContainer>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} index={index} />
      ))}
    </ListContainer>
  );
}

export default TodoList;

