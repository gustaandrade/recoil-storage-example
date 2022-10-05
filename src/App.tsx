import React from 'react';

import BucketForm from './components/BucketForm';
import FruitForm from './components/FruitForm';

import './App.css';
import FruitArea from './components/FruitArea';
import BucketArea from './components/BucketArea';

function App() {
  return (
    <div className='App'>
      <h1>Baldes & Frutas</h1>

      <div className='form_row'>
        <BucketForm />
        <FruitForm />
      </div>

      <div className='fruit_row'>
        <FruitArea />
      </div>

      <div className='bucket_row'>
        <BucketArea />
      </div>
    </div>
  );
}

export default App;
