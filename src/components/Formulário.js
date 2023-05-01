import React, { useState } from 'react';

function Formulario() {
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };

  const handleChangeQuantidade = (event) => {
    setQuantidade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Item:', item);
    console.log('Quantidade:', quantidade);
    
    setItem('');
    setQuantidade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item:
        <input type="text" valor={item} onChange={handleChangeItem} />
      </label>
      <br />
      <label>
        Quantidade:
        <input type="text" value={quantidade} onChange={handleChangeQuantidade} />
      </label>
      <br />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Formulario;
