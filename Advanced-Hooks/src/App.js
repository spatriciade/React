// import './App.css';
import StringProvider from "./store/StringProvider";
import StringReader from "./components/StringReader";
import StringModifier from "./components/StringModifier";

function App() {
  return (
    <StringProvider>
      <StringReader />
      <StringModifier />
    </StringProvider>
  );
}

export default App;
