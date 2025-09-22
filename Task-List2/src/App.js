import { useEffect, useState } from "react";
import TaskList from "./components/Tasks/TasksList";
import TasksInput from "./components/Tasks/TasksInput";
import classes from "./App.module.css";
import HourGlass from "./components/UI/Spinners/HourGlass";

const BASE_URL = "https://task-list-fs-default-rtdb.europe-west1.firebasedatabase.app/";

// 👇 tiempo de carga en milisegundos
const SPINNER_DELAY = 2000;

const App = () => {
  const [tasks, setNewTask] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasksHandler = async (
    method = "GET",
    task = { id: "", text: "" }
  ) => {
    try {
      setPending(true);
      setError(null);

      let response;

      if (method === "DELETE") {
        response = await fetch(BASE_URL + "tasks/" + task.id + ".json", {
          method,
        });
      } else if (method === "PATCH") {
        response = await fetch(BASE_URL + "tasks/" + task.id + ".json", {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: task.text }),
        });
      } else if (method === "POST") {
        response = await fetch(BASE_URL + "tasks.json", {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: task.text }),
        });
      } else {
        // GET
        response = await fetch(BASE_URL + "tasks.json");
      }

      if (!response.ok) throw new Error("Request failed!");

      const data = await response.json();

      // 👇 usamos la constante SPINNER_DELAY
      setTimeout(() => {
        if (method === "GET") {
          setNewTask(data);
        } else {
          fetchTasksHandler(); // recargar lista después de POST, PATCH o DELETE
        }
        setPending(false);
      }, SPINNER_DELAY);
    } catch (error) {
      setError({ message: error.message || "Something went wrong" });
      setPending(false);
    }
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  const addTaskHandler = (enteredText) => {
    fetchTasksHandler("POST", { text: enteredText });
  };

  const deleteItemHandler = (taskId) => {
    fetchTasksHandler("DELETE", { id: taskId });
  };

  const updateItemHandler = (taskId, taskText) => {
    fetchTasksHandler("PATCH", { id: taskId, text: taskText });
  };

  return (
    <main>
      <section className={classes["task-form"]}>
        <TasksInput onAddTask={addTaskHandler} />
      </section>
      {pending && <HourGlass />}
      <section className={classes["tasks-content"]}>
        {!pending && tasks !== null && error === null && (
          <TaskList
            items={tasks}
            onDeleteItem={deleteItemHandler}
            onEditItem={updateItemHandler}
          />
        )}
        {!pending && tasks === null && !error && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No tasks available. Add one?
          </h2>
        )}
        {!pending && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #cc0000",
              backgroundColor: "#ff6666",
              color: "#fff",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
};

export default App;


