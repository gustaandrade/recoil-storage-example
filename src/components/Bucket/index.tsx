import React from 'react';
import { useRecoilValue } from 'recoil';

import { BucketProps } from './types';
import { bucketState } from '../../state';

import './styles.css';

const Bucket: React.FC<BucketProps> = ({ bucket }) => {
  const buckets = useRecoilValue(bucketState);

  return (
    <div className='bucket_container'>
      <span className='bucket_name'>{bucket.name}</span>
      <span className='bucket_price'>{bucket.capacity}</span>

      <div className='bucket_fruit_container'>
        {buckets && buckets.length > 0 && (
          <>
            {bucket.fruits &&
              bucket?.fruits?.map((fruit, index) => (
                <>
                  <span key={`${fruit.name}-${index}`}>{fruit.name}</span>
                  <button className='bucket_button'>+</button>
                  <button className='bucket_button'>-</button>
                </>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Bucket;
