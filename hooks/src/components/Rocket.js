import { useState, useEffect } from "react";
import "./Rocket.css";

export default function Rocket({ inicio = 10, start }) {
  const [contador, setContador] = useState(inicio);
  const [despegue, setDespegue] = useState(false);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    if (!start) return; // Solo inicia si start es true
    if (contador <= 0) {
      setDespegue(true);
      const mensaje = new SpeechSynthesisUtterance("Despegue!");
      window.speechSynthesis.speak(mensaje);
      return;
    }

    // Cambiar color según valor
    if (contador <= 2) setColor("red");
    else if (contador <= 5) setColor("yellow");
    else setColor("blue");

    // Voz del contador
    const mensaje = new SpeechSynthesisUtterance(contador.toString());
    window.speechSynthesis.speak(mensaje);

    const timer = setTimeout(() => setContador(contador - 1), 2000);
    return () => clearTimeout(timer);
  }, [contador, start]);

  return (
    <div className={`rocket ${color} ${despegue ? "launch" : ""}`}>
      {contador > 0 ? contador : "Go!!!!"}
    </div>
  );
}
