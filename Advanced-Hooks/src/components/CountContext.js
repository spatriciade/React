// import './App.css';
// import CounterReducer from "./components/CounterReducer";
import B from "../nestedComponents/B";
import C from "../nestedComponents/C";
import { useState, createContext } from "react";

export const MyContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* <CounterReducer /> */}

      <B onClick={countHandler}/>
      <MyContext.Provider value={count}>
    <C />
      </MyContext.Provider>
  
    </div>
  );
}

export default App;
