import React from 'react';

import './styles.css';

const BucketForm: React.FC = () => {
  return (
    <div className='bucket_container'>
      <form className='bucket_form'>
        <h2>Criar Balde</h2>

        <label className='bucket_label' htmlFor='bucketName'>
          Nome
        </label>
        <input className='bucket_input' id='bucketName' type='text' />

        <label className='bucket_label' htmlFor='bucketCapacity'>
          Capacidade
        </label>
        <input className='bucket_input' id='bucketCapacity' type='number' />

        <button className='bucket_button' type='submit'>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default BucketForm;
