import React from 'react'

const Botão = () => {

    function handleClick(){
      alert('Você clicou no botão :)');
    }

  return (
    <div>
        <h1>Exercício 1 - SEMANA 6</h1>
        <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Botão;
