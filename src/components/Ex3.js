import React, { useState } from 'react';


function Contador() {
  const [contar, setContar] = useState(0);

  function incrementar() {
    setContar(contar + 1);
  }

  function decrementar() {
    setContar(contar -1);
  }
    
  return (
    <div>
        <h1>Exercício 3 - SEMANA 6</h1>
        <p> Contador: {contar}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;