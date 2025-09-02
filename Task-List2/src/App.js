import classes from "./App.module.css";
import { useState } from "react";
import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import tasks from "./MockeDB/tasks.json"
import Item from "../src/components/Tasks/Item"

function App() {
  
  const [updatedTasks, setNewTask] = useState(tasks);

  //   console.log(updatedTasks);
  
    const saveTask = (createdTask) => {
      // console.log(createdTask);
      setNewTask((tasks)=>{
        return [
          ...tasks,
          {
            id: Math.ceil(Math.random() * 1000),
            text: createdTask,
          },
        ]
      })

      // setNewTask((prevState) => {
      //   return [
      //     ...prevState,
      //     {
      //       id: Math.ceil(Math.random() * 1000),
      //       text: createdTask,
      //     },
      //   ];
      // });
    };
  
  
  return (
    <>
      <div className={classes.taskForm}>
        <TaskForm onNewTask={saveTask} />
        <TaskList onInitialTasks={updatedTasks} />
        <Item  info="alert"/>
      </div>
    </>
  );
}

export default App;
