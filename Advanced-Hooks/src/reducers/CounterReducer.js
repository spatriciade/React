import React, { useReducer } from 'react';



// Reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, 0); // Estado inicial en 0

  return (
    <div>
      <h2>Contador con useReducer</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Sumar 1</button>
      <span style={{ margin: '0 1rem' }}>{count}</span>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Restar 1</button>
    </div>
  );
};

export default CounterReducer;
