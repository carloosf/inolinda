import { useState, useEffect } from "react";
import Hero from "./components/hero/Hero.tsx";
import "./App.css";
import person from "./assets/person.png";
import sun from "./assets/sun.png";
import moon from "./assets/moon.png";

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState({});
  const [showHero, setShowHero] = useState(true);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [moonOrSun, setMoonOrSun] = useState(3);
  const [forest, setForest] = useState(3);
  const [cuidadosamente, setCuidadosamente] = useState(3);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowHero(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = () => {
    setData({
      name,
      moonOrSun,
      forest,
    });
  };

  const handleClick = () => {
    setStep(step + 1);
  };

  return (
    <div className="container">
      {showHero && <Hero />}
      {!showHero && step === 0 && (
        <div className="containerTextArea">
          <div className="img"></div>
          <div className="person">
            <img src={person} alt="" />
          </div>
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
      {!showHero && step === 1 && (
        <div className="containerTextArea">
          <div className="img"></div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="textArea">
            <p>
              Saudações! Sou Damm, o seu guia nesta incrível jornada. Antes de
              começarmos nossa aventura, gostaria de saber mais sobre você.
            </p>
            <div className="nameArea">
              <input
                type="text"
                placeholder="Seu Nome?"
                onChange={(e) => setName(e.target.value)}
              />
              <button onClick={handleClick}>Proximo</button>
            </div>
          </div>
        </div>
      )}
      {!showHero && step === 2 && (
        <div className="containerTextArea">
          <div className="img"></div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="textArea">
            <p>
              E se você precisar atravessar uma floresta, qual caminho seguir?
            </p>
            <div className="radioContainerForest">
              <div className="radioInput">
                <input
                  type="radio"
                  onChange={() => setForest(0)}
                  checked={forest === 0}
                  value={forest}
                />{" "}
                <p>O caminho mais rápido e perigoso.</p>{" "}
              </div>
              <div className="radioInput">
                <input
                  type="radio"
                  onChange={() => setForest(1)}
                  value={forest}
                  checked={forest === 1}
                />{" "}
                <p>O caminho mais longo e seguro.</p>
              </div>
            </div>

            <button onClick={handleClick}>Proximo</button>
          </div>
        </div>
      )}
      {!showHero && step === 3 && (
        <div className="containerTextArea">
          <div className="img"></div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="textArea">
            <p>Qual a sua preferência a manhã ou a noite? </p>
            <div className="radioContainer">
              <div className="radioInput">
                <input
                  type="radio"
                  onChange={() => setMoonOrSun(0)}
                  checked={moonOrSun === 0}
                  value={moonOrSun}
                />
                <img src={sun} alt="" onClick={() => setMoonOrSun(0)} />
              </div>
              <div className="radioInput">
                <input
                  type="radio"
                  onClick={() => setMoonOrSun(1)}
                  value={moonOrSun}
                  checked={moonOrSun === 1}
                />
                <img src={moon} alt="" onClick={() => setMoonOrSun(1)} />
              </div>
            </div>
            <button onClick={handleClick}>Proximo</button>
          </div>
        </div>
      )}
      {!showHero && step === 4 && (
        <div className="containerTextArea">
          <div className="img"></div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="textArea">
            <p>
              Nas suas decisões, você considera cuidadosamente ou decide
              intuitivamente?
            </p>
            <div className="radioContainer">
              <div className="radioInput">
                <input
                  type="radio"
                  onChange={() => setCuidadosamente(0)}
                  checked={cuidadosamente === 0}
                  value={cuidadosamente}
                />
                <span>Considerar cuidadosamente</span>
              </div>
              <div className="radioInput">
                <input
                  type="radio"
                  onClick={() => setCuidadosamente(1)}
                  value={cuidadosamente}
                  checked={cuidadosamente === 1}
                />
                <span>decide intuitivamente</span>
              </div>
            </div>
            <button onClick={handleClick}>Proximo</button>
          </div>
        </div>
      )}
      {!showHero && step === 5 && (
        <div className="containerTextArea">
          <div className="img"></div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="radioContainer">
            <input type="image" src="" alt="" />
            <div className="textArea"></div>
          </div>
          <button onClick={handleClick}>Proximo</button>
        </div>
      )}
      {!showHero && step === 6 && (
        <div className="containerTextArea">
          <button onClick={handleSubmit}></button>
        </div>
      )}
    </div>
  );
}
