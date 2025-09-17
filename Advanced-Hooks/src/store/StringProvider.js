// import './App.css';
import React, { createContext, useReducer } from "react";
import { initialState, StringReducer } from "../reducers/StringReducer";

export const StringContext = createContext(null);

function StringProvider(props) {
  const [state, dispatch] = useReducer(StringReducer, initialState);

  return (
    <StringContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StringContext.Provider>
  );
}

export default StringProvider;