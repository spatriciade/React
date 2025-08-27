// import { useLayoutEffect } from 'react';
import './App.css';



function App() {
  const membersList = [{
  "id": 1,
  "first_name": "Alvan",
  "age": 73
}, {
  "id": 2,
  "first_name": "Sammy",
  "age": 56
}, {
  "id": 3,
  "first_name": "Charita",
  "age": 29
}, {
  "id": 4,
  "first_name": "Kalil",
  "age": 89
}, {
  "id": 5,
  "first_name": "Babb",
  "age": 36
}, {
  "id": 6,
  "first_name": "Norry",
  "age": 45
}, {
  "id": 7,
  "first_name": "Clarabelle",
  "age": 61
}, {
  "id": 8,
  "first_name": "Norean",
  "age": 67
}, {
  "id": 9,
  "first_name": "Fredia",
  "age": 48
}, {
  "id": 10,
  "first_name": "Skipper",
  "age": 98
}];
const filteredList = membersList.filter((member)=>{
return member.age < 50
})
console.log(filteredList);
const list = filteredList.map((member)=> {
  return( 
    <li>
      <strong>Name:</strong> {member.first_name}  <strong>Age:</strong> {member.age}
    </li>
  );
});

return <ul>{list}</ul>;
}
export default App;

//   return (
//     <ul>
//       {filteredList.map((member) => (
//         <li key={member.id}>
//           <strong>Name:</strong> {member.first_name}  <strong>Age:</strong> {member.age}
//         </li>
//       ))}
// </ul>
//     );
// }

// export default App;