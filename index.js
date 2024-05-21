import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  // Stiluri inline
  const inlineStyle = {
    fontSize: '18px',
    color: 'green'
  };

  // Funcții de calcul matematic
  const add = (a, b) => a + b;
  const sqrt = (x) => Math.sqrt(x);

  // Generare număr aleatoriu și data curentă
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <h1 className="largeText">Haus Aufgabe 21.05.2024 </h1>
      <h2 className="smallText"> by Gabriel Gherghesanu</h2>
      <p style={inlineStyle}>Das hausAufgabe ist Made by Gabriel Gherghesanu und chat gpt 50% und 50%</p>
      <h3>die Summe: {add(10, 20)}</h3>
      <h3>Quadratwurzel: {sqrt(16)}</h3>
      <p>Deine gluck zall: {randomNum}</p>
      <p>Hoite ist : {currentDate}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
