import React from 'react';

import './styles.css';

const FruitForm: React.FC = () => {
  return (
    <div className='fruit_container'>
      <form className='fruit_form'>
        <h2>Criar Fruta</h2>

        <label className='fruit_label' htmlFor='fruitName'>
          Nome
        </label>
        <input className='fruit_input' id='fruitName' type='text' />

        <label className='fruit_label' htmlFor='fruitPrice'>
          Preço
        </label>
        <input className='fruit_input' id='fruitPrice' type='number' />

        <button className='fruit_button' type='submit'>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default FruitForm;
