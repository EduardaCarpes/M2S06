import React from 'react'

const Clicar = props => {
    function handleClick(){alert(`Você clicou no botão :) O argumento é ${props.argumento}`);}
     
    return (
    <div>
        <h1> Exercício 2 - SEMANA 6</h1>
        <button onClick={handleClick}>clique aqui</button>
    </div>
    )}
  export default Clicar;
