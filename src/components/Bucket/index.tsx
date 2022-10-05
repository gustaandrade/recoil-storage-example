import React from 'react';
import { useRecoilValue } from 'recoil';

import { BucketProps } from './types';
import { bucketState } from '../../state';

import './styles.css';

const Bucket: React.FC<BucketProps> = ({ bucket }) => {
  const buckets = useRecoilValue(bucketState);

  return (
    <div className='bucket_container'>
      <p className='bucket_name'>{bucket.name}</p>
      <p className='bucket_price'>{bucket.capacity}</p>

      <div className='bucket_fruit_container'>
        {buckets ? (
          <button className='bucket_button'>Remover balde</button>
        ) : (
          <button className='bucket_button' disabled>
            Não é possível deletar baldes com frutas
          </button>
        )}
      </div>
    </div>
  );
};

export default Bucket;
