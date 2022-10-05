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
      <div className='bucket_area_grid'>
        {buckets && buckets.length > 0 ? (
          buckets.map((bucket, index) => (
            <Bucket key={`${bucket.name}-${index}`} bucket={bucket} />
          ))
        ) : (
          <div>Não existe nenhum balde cadastrado</div>
        )}
      </div>
    </div>
  );
};

export default BucketArea;
