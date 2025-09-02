//import './TaskForm.css';
import classes from "./TaskForm.module.css";
import { useState } from "react";
import Button from "../UI/SubmitButton"



function TaskForm(props) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask(task);
        //ultimo paso
        setTask("");
      };
    
      const handleChange = (e) => {
        setTask(e.target.value);
        console.log(e.target.value);
      };
    

  return ( 
<form className={classes.inputForm} onSubmit={handleSubmit}>
  <h1 className={classes.inputFormTitle}>Post a Task</h1>
          <input
            className={classes.taskInput}
            type="text"
            placeholder="Write your task"
            name="task"
            onChange={handleChange}
            value={task}
          />
          <Button></Button>
        </form>  );
}

export default TaskForm;