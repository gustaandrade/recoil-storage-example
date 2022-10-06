import React from 'react';
import { useRecoilState } from 'recoil';

import { BucketProps } from './types';
import { Fruit } from '../../types';
import { bucketState } from '../../state';
import { convertPriceToCurrency } from '../../utils';

import './styles.css';

const Bucket: React.FC<BucketProps> = ({ bucket }) => {
  const [buckets, setBuckets] = useRecoilState(bucketState);

  const handleAddFruit = (fruitToAdd: Fruit) => {
    let newBucketList = [...buckets].map(localBucket => {
      if (localBucket.id === bucket.id)
        return {
          ...localBucket,
          usedCapacity: Math.round(
            ((localBucket.fruits.length + 1) / localBucket.totalCapacity) * 100
          ),
          fruits: [...localBucket.fruits, fruitToAdd]
        };
      else return localBucket;
    });

    setBuckets(newBucketList);
  };

  const handleRemoveFruit = (indexToRemove: number) => {
    let newBucketList = [...buckets].map(localBucket => {
      if (localBucket.id === bucket.id)
        return {
          ...localBucket,
          usedCapacity: Math.round(
            ((localBucket.fruits.length - 1) / localBucket.totalCapacity) * 100
          ),
          fruits: localBucket.fruits.filter(
            (fruit, index) => index !== indexToRemove
          )
        };
      else return localBucket;
    });

    setBuckets(newBucketList);
  };

  const handleRemoveBucket = () => {
    let newBucketList = [...buckets].filter(b => b.id !== bucket.id);
    setBuckets(newBucketList);
  };

  return (
    <div className='bucket_container'>
      <span className='bucket_name'>{bucket.name}</span>
      <span className='bucket_capacity'>
        Capacidade: {bucket.fruits.length}/{bucket.totalCapacity} -{' '}
        {bucket.usedCapacity}%
      </span>

      <div className='bucket_fruit_container'>
        {bucket &&
          bucket.fruits &&
          bucket.fruits.map((fruit, index) => (
            <div key={`${fruit.name}-${index}`} className='bucket_fruit_cell'>
              <span
                key={`${fruit.name}-${index}`}
                className='bucket_fruit_name'
              >
                {fruit.name} - {convertPriceToCurrency(fruit.price)}
              </span>
              <button
                className='bucket_fruit_button'
                disabled={bucket.totalCapacity === bucket.fruits.length}
                onClick={() => handleAddFruit(fruit)}
              >
                +
              </button>
              <button
                className='bucket_fruit_button'
                onClick={() => handleRemoveFruit(index)}
              >
                -
              </button>
            </div>
          ))}

        <button
          className='bucket_button'
          disabled={bucket.usedCapacity > 0}
          onClick={handleRemoveBucket}
        >
          Remover balde
        </button>
      </div>
    </div>
  );
};

export default Bucket;
