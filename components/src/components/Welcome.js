import "./Welcome.css";
import NewDate from "./NewDate";
import Person from "./Person";


function Welcome(props) {
    const data ={
        dni: Math.ceil(Math.random())+String.fromCharCode(Math.floor(Math.random() * 122) + 65),
      userName:props.userName,
    } 
 

  return (
    <div>
      <h1>Hello, {props.userName}!</h1>
      <NewDate today={props.today} />
      <Person info={data} />
    </div>
  );
}

export default Welcome;