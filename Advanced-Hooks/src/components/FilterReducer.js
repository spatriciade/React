import classes from "./FilterReducer.module.css";
import { useReducer } from "react";

const initialState = [
  {
    id: 1,
    task: "Lorem IpsuLorem ipsum dolor sit amet consectetur adipisicing elit.",
    done: false,
  },
  {
    id: 2,
    task: "Culpa cumque tempora nulla iure est, eligendi perspiciatis",
    done: false,
  },
  {
    id: 3,
    task: "Vitae eum quo voluptates fugit voluptatem earum pariatur quidem.",
    done: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Remove":
      return state.filter((item) => item.id !== action.payload);
    case "Toggle":
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};

function FilterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTask = () => {
    // Obtener ID más alto actual
    const maxId = state.reduce((max, item) => (item.id > max ? item.id : max), 0);

    // Elegir texto aleatorio de initialState
    const randomTaskText =
      initialState[Math.floor(Math.random() * initialState.length)].task;

    // Crear nueva tarea
    const newTask = {
      id: maxId + 1,
      task: randomTaskText,
      done: Math.random() < 0.5, // aleatorio
    };

    dispatch({ type: "Add", payload: newTask });
  };

  return (
    <>
      <div className={classes["task-list"]}>
        <h1>To do App</h1>
        <ul>
          {state.map((item) => (
            <li key={item.id}>
              <span className={item.done ? classes.done : ""}>
                {item.task}
              </span>
              <div className={classes.actions}>
                <button
                  onClick={() =>
                    dispatch({ type: "Toggle", payload: item.id })
                  }
                  className={classes.toggle}
                >
                  Toggle
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "Remove", payload: item.id })
                  }
                  className={classes.remove}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón ADD fuera del div y con funcionalidad */}
      <button className={classes.add} onClick={handleAddTask}>
        Add
      </button>
    </>
  );
}

export default FilterReducer;

