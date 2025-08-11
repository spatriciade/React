import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f8fafc" }}>
      <ProfileCard />
    </div>
  );
}

export default App;


