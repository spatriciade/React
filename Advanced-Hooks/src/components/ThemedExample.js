// import './App.css';
import { useContext, createContext, useReducer } from "react";

const initialState = {
  light: {
    textColor: "#000",
    bgColor: "#f6f8fa",
  },
  dark: {
    textColor: "#fff",
    bgColor: "#222",
  },
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return initialState.light;
    case "DARK":
      return initialState.dark;
    case "TOGGLE":
      return state.bgColor === initialState.light.bgColor
        ? initialState.dark
        : initialState.light;
    default:
      throw new Error("No action available");
  }
};

const ThemeContext = createContext();

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState.light);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ToolBar />
    </ThemeContext.Provider>
  );
}

function ToolBar() {
  return (
    <div
      style={{
        backgroundColor: "#ededed",
        display: "flex",
        justifyContent: "center",
        padding: "2em 0",
        borderRadius: ".4rem",
      }}
    >
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE" })}
      style={{
        backgroundColor: state.bgColor,
        color: state.textColor,
        padding: "1em 2em",
        borderRadius: ".5rem",
        fontSize: "1.4rem",
        cursor: "pointer",
      }}
    >
      I am styled by theme context!
    </button>
  );
}

export default App;

