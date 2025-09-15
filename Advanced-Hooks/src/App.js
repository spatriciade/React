// import './App.css';
import { useContext, createContext, useReducer } from "react";

const initialState = {
  light: {
    textColor: "#0000",
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
      state = initialState.light;
      break;
    case "DARK":
      state = initialState.dark;

      break;

    default:
      throw new Error("No action available");
  }
  return state;
};

const ThemeContext = createContext(initialState);

function App() {
  return <div>

  </div>;
}

function ToolBar() {
  return <div style={{
    backgroundColor:"#ededed",
    display:"flex",
    justifyContent:"center"
    padding: "2em, 0",
    borderRadius: ".4rem",
  }}>

  </div>;
}



export default App;
