import './Person.css';
import { useState } from "react";

function Person() {
  const [person, setPersonInfo] = useState({
    name:"Jhon",
    age:27,
    enemies:["Skynet","T-800","T-1000","T-X"],
    father:"unknown"
  })

  const updafateFather = ()=>{
    setPersonInfo(previousState =>{
      return{
        ...previousState,father:"Kyle Reese"
      }
    })
  }
  return (
<div>
  <h1>Character Info</h1>
  <h2>Name:{person.name}</h2>
  <h2>Age:{person.age}</h2>
  <h2>Enemies:{person.enemies}</h2>
  <h2>Father:{person.father}</h2>
  <button type="button" onClick={updafateFather}>Update</button>
</div>
  );
}

export default Person;