import { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import "./App.css"; 

export default function App() {
  const [data, setData] = useState({});
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowHero(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div className="container">
      <div>
        
      </div>
    
      {showHero && <Hero />}
      
      <div></div>
    </div>
  );
}
