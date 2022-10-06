import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { bucketState } from '../../state';

import './styles.css';

const BucketForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [capacity, setCapacity] = useState<number>(0);

  const setBucketState = useSetRecoilState(bucketState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setBucketState(bucketState => [
      ...bucketState,
      {
        id: crypto.randomUUID(),
        name: name,
        totalCapacity: capacity,
        usedCapacity: 0,
        fruits: []
      }
    ]);
    // setName('');
    // setCapacity(0);
  };

  return (
    <div className='bucket_form_container'>
      <form className='bucket_form' action='' onSubmit={onSubmit}>
        <h2>Criar Balde</h2>

        <label className='bucket_form_label' htmlFor='bucketName'>
          Nome
        </label>
        <input
          className='bucket_form_input'
          id='bucketName'
          type='text'
          onChange={event => setName(event.target.value)}
        />

        <label className='bucket_form_label' htmlFor='bucketCapacity'>
          Capacidade
        </label>
        <input
          className='bucket_form_input'
          id='bucketCapacity'
          type='number'
          onChange={event => setCapacity(Number(event.target.value))}
        />

        <button className='bucket_form_button' type='submit'>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default BucketForm;
