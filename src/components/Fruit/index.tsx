import React from 'react';
import { useRecoilValue } from 'recoil';

import { FruitProps } from './types';
import { convertPriceToCurrency } from '../../utils';
import { bucketState } from '../../state';

import './styles.css';

const Fruit: React.FC<FruitProps> = ({ fruit }) => {
  const buckets = useRecoilValue(bucketState);

  return (
    <div className='fruit_container'>
      <p className='fruit_name'>{fruit.name}</p>
      <p className='fruit_price'>{convertPriceToCurrency(fruit.price)}</p>

      <div className='fruit_bucket_container'>
        {buckets && buckets.length > 0 ? (
          buckets.map((bucket, index) => (
            <button key={`${bucket.name}-${index}`} className='fruit_button'>
              Adicionar no {bucket.name}
            </button>
          ))
        ) : (
          <button className='fruit_button' disabled>
            Não existem baldes cadastrados
          </button>
        )}
      </div>
    </div>
  );
};

export default Fruit;
