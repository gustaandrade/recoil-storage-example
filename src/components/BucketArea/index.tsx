import React from 'react';
import { useRecoilValue } from 'recoil';

import Bucket from '../Bucket';
import { bucketState } from '../../state';

import './styles.css';

const BucketArea: React.FC = () => {
  const buckets = useRecoilValue(bucketState);

  return (
    <div className='bucket_area_container'>
      <h2>Baldes</h2>

      <div
        className={buckets.length > 0 ? 'bucket_area_grid' : 'bucket_area_flex'}
      >
        {buckets && buckets.length > 0 ? (
          buckets.map((bucket, index) => (
            <Bucket key={`${bucket.name}-${index}`} bucket={bucket} />
          ))
        ) : (
          <p>Nenhum balde foi cadastrado</p>
        )}
      </div>
    </div>
  );
};

export default BucketArea;
