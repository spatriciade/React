import { useState } from 'react';
import studentsList from './Debug Example/students.json';
// import './App.css';



function Item(props) {
  const handleClicked = () => {
    console.log(props.id);
    props.onDelete(props.id);
  }
  return (
    <li style={{
      padding: "10px",
      borderBottom: "1px solid #ccc"
    }} key={props.index} onClick={handleClicked}>{props.student}</li>
  );
}



function App() {

  const [students, setStudents] = useState(studentsList)
  const handleDeleteStudent = (key) => {
    const newStudents = students.filter((student) => student.id !== key);
    setStudents(newStudents);
  }
  const addStudentHandler = (e) => {
    e.preventDefault();
    const newStudent = {
      student: e.target[0].value,
      id: 0 //logic bug
    }
    setStudents([...students, newStudent]);
  }
  return (
    <div>
      <h1>Students</h1>
      <form onSubmit={addStudentHandler}>
        <input style={{
          margin: '20px',
          border: '1px solid black',
          padding: '10px'
        }} type="text" placeholder="Enter student name" />
        <button style={{
          padding: '10px',
          backgroundColor: 'green',
        }} type="submit">Add</button>
      </form>
      <ul>
        {students.map((student, index) => (
          <Item key={index} id={student.id} student={student.student} onDelete={handleDeleteStudent} />
        ))}
      </ul>
    </div>
  );
}

export default App;