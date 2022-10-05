import React from 'react';

import BucketForm from './components/BucketForm';
import FruitForm from './components/FruitForm';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Baldes & Frutas</h1>

      <div className='form_row'>
        <BucketForm />
        <FruitForm />
      </div>

      {/* <div className='fruit_row'>
        <FruitForm />
      </div>

      <div className='bucket_row'>
        <BucketForm />
      </div> */}
    </div>
  );
}

export default App;
