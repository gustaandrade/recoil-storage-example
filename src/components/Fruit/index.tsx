import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { FruitProps } from './types';
import { convertPriceToCurrency } from '../../utils';
import { bucketState } from '../../state';

import './styles.css';

const Fruit: React.FC<FruitProps> = ({ fruit }) => {
  const [selectedValue, setSelectedValue] = useState<string>('default');

  const [buckets, setBuckets] = useRecoilState(bucketState);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleBucketChoice = () => {
    let newBucketList = [...buckets].map(bucket => {
      if (bucket.name === selectedValue)
        return {
          ...bucket,
          usedCapacity: Math.round(
            ((bucket.fruits.length + 1) / bucket.totalCapacity) * 100
          ),
          fruits: [...bucket.fruits, fruit]
        };
      else return bucket;
    });

    setBuckets(newBucketList);
  };

  return (
    <div className='fruit_container'>
      <span className='fruit_name'>{fruit.name}</span>
      <span className='fruit_price'>{convertPriceToCurrency(fruit.price)}</span>

      <div className='fruit_bucket_container'>
        {buckets && buckets.length > 0 && (
          <>
            <span className='fruit_instruction'>Adicionar ao balde:</span>

            <select
              id='fruit_select'
              className='fruit_select'
              defaultValue={selectedValue}
              onChange={event => handleSelectChange(event)}
            >
              <option disabled value={selectedValue}>
                Escolha o balde...
              </option>
              {buckets
                .filter(bucket => bucket.usedCapacity < 100)
                .map((bucket, index) => (
                  <option key={`${bucket.name}-${index}`} value={bucket.name}>
                    {`${bucket.name}`}
                  </option>
                ))}
            </select>

            <button
              className='fruit_button'
              disabled={selectedValue === 'default'}
              onClick={handleBucketChoice}
            >
              Adicionar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Fruit;
