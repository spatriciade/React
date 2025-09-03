import classes from "./App.module.css";
import data from ".components/mockedDB/tasks.js";
import TaskInput from "./components/Tasks/TaskInput.js";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(data);
  const addTaskHandler = (text) => {
    setValue((prevTask) => {
      const updatedTask = [...prevTask];
      updatedTask.unshift({
        id: Math.random().toString(16).substring(2),
        text,
      });
      return updatedTask;
    });
  };
  return (
    <main>
      <section className={classes["tasks-form"]}>
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section className={classes["tasks-content"]}> </section>
    </main>
  );
}

export default App;
