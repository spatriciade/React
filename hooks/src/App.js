import "./App.css";
// import { useState } from "react";
// import Person from './components/Person';

// function App() {
// // const [count, setCount] = useState(0)

//   return (
// <div>
//   <Person/>
//   {/* <p>Has clicado {count} veces</p>
//   <button onClick={() => setCount(count + 1)}>Pulsame</button> */}
// </div>
//   );
// }
//contador básico
// import { useState } from "react";

// import { useState } from "react";
// import Counter from './components/ShowContador';

// export default function Contador() {
//   const [count, setCount] = useState(0);
//   const handlePlusOne = () => {
//     setCount(count + 1);
//   };
//   const handleMultiply = () => {
//     setCount(count * 5);
//   };
//   const handleReset = () => {
//     setCount(0);
//   };
//   const handleDividedByHundred = () => {
//     if (count === 0) {return;}
//     setCount(count / 100);
//   };
//   return (
//     <div>
//       <p>Contador: {count}</p>
//       <button onClick={handlePlusOne}>Sumar</button>
//       <button onClick={handleMultiply}>Multiplicar</button>
//       <button onClick={handleReset}>Reiniciar</button>
//       <button onClick={handleDividedByHundred}>Dividir por 100</button>
//     </div>
//   );
// }
// import "./App.css";
// // import Timer from './components/Timer';
// import Greetings from "./components/Greetings";

// function App() {
//   return (
//     <Greetings name="Patricia" />
//     // {/* <Timer/> */}
//   );
// }

// export default App;
// import { useState } from "react";
// import Rocket from "./components/Rocket";

// function App() {
//   const [lanzar, setLanzar] = useState(false);

//   return (
//     <div>
//       <h1 style={{ textAlign: "center", marginTop: "20px" }}>Rocket Launch </h1>

//       {!lanzar && (
//         <button
//           style={{ display: "block", margin: "20px auto", padding: "10px 20px" }}
//           onClick={() => setLanzar(true)}
//         >
//           Count down!!!
//         </button>
//       )}

//       <Rocket inicio={10} start={lanzar} />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
     
    } else {
      setRunning(true);
    }
  });

  return (
    <div>
      <h1>Rocket Launching - NASA Mars</h1>
      <h2>Ignition Sequence Start</h2>
      {running && <h3 className="pane red">All engines running. Lift Off!...</h3>}
      <h3 className={count == 0 && "move"}>
        <span className={count <= 5 && count >=3 ? "yellow" : count <=2 && "red"}>{count}</span>
      
      </h3>
    </div>
  );
}

export default App;
