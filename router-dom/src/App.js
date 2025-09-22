import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import NewAbout from "./views/NewAbout";
import NotFound from "./views/NotFound";


function App() {
  return (
    <>
      <header>
        <h1>React Router DOM</h1>
        <NavBar />
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" >
            <Route index element={<About />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/about/new" element={<NewAbout />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
