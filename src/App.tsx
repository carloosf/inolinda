import { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import "./App.css";

export default function App() {
  const [data, setData] = useState({});
  const [showHero, setShowHero] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowHero(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = () => {
    setStep(step + 1);
  };
  console.log(step);

  const handleInput = (value, name) => {
    setData({ name: value });
  };

  return (
    <div className="container">
      {showHero && <Hero />}
      {!showHero && step === 0 && (
        <div className="containerTextArea">
          <div className="img"></div>
          <div className="person"></div>
          <div className="textArea">
            <p>
              Bem vindo a RECCITY, uma vanguarda entre as Smartcities do século
              XXII. No ano de 2117, esta metrópole futurista destaca-se, onde
              cada cidadão é um especialista em sua área.
            </p>
            <button onClick={handleClick}>Proximo</button>
          </div>
        </div>
      )}
      {!showHero ||
        (step === 1 && (
          <div className="containerTextArea">
            <div className="img"></div>
            <div className="person"></div>
            <div className="textArea">
              <p>
                Saudações! Sou Damm, o seu guia nesta incrível jornada. Antes de
                começarmos nossa aventura, gostaria de saber mais sobre você.
              </p>
              <input type="text" placeholder="Qual é o seu nome?"/>
              <button onClick={handleClick }>Proximo</button>
            </div>
          </div>
        ))}
    </div>
  );
}
