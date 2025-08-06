import './App.css';
import Welcome from './components/Welcome';


function App() {
   const today = new Date(Date.now()).toLocaleDateString();
  return (
    <div className= "main">
      <Welcome userName="Patricia" today={today} />
      <Welcome userName="Silvia" today={today} />
      <Welcome userName="World" today={today} />
    </div>
  );
}

export default App;
