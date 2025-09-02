//import './TaskList.css';
import classes from "./TaskList.module.css";


function TaskList(props) {
  return ( 
    <div className={classes.taskList}>
    {props.onInitialTasks.map((task) => {
        return <p className={classes.tasks} key={task.id}>{task.text}</p>

      })}
  </div>
);
}

export default TaskList;