// import './Greetings.css';
import { useEffect } from "react";

function Greetings(props) {
    const message = `Hello ${props.name}, welcome to our website!`;
    useEffect(() => {
        document.title = `Greetings to ${props.name}` //esto hace que salga el name en el favicon de la página
    },[props.name] );
  return (
<h1>{message}</h1>
  );
}

export default Greetings;