import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { fruitState } from '../../state';

import './styles.css';

const FruitForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const setBucketState = useSetRecoilState(fruitState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setBucketState(fruitState => [
      ...fruitState,
      {
        id: crypto.randomUUID(),
        name: name,
        price: price
      }
    ]);
    setName('');
    setPrice('');
  };

  return (
    <div className='fruit_form_container'>
      <form className='fruit_form' action='' onSubmit={onSubmit}>
        <h2>Criar Fruta</h2>

        <label className='fruit_form_label' htmlFor='fruitName'>
          Nome
        </label>
        <input
          className='fruit_form_input'
          id='fruitName'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <label className='fruit_form_label' htmlFor='fruitPrice'>
          Preço
        </label>
        <input
          className='fruit_form_input'
          id='fruitPrice'
          type='text'
          value={price}
          onChange={event => setPrice(event.target.value)}
        />

        <button
          className='fruit_form_button'
          type='submit'
          disabled={name === '' || price === ''}
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default FruitForm;
