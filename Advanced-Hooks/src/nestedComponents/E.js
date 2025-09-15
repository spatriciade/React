// import './E.css';
import { useContext } from "react";
import { MyContext } from "../components/CountContext";

function E() {
    const count = useContext(MyContext)
  return (
<div style={{backgroundColor:"darkblue", color:"white", fontSize:"2rem"}}>This is E component. Count:{count}</div>
  );
}

export default E;