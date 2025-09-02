import React, { useState } from "react";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #2d5ba3;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #244a82;
  }
`;

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <Container>
      <Title>Post a Task</Title>
      <Input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={addTodo}>Save</Button>
      <TodoList todos={todos} />
    </Container>
  );
}

export default App;


