import React from 'react';
import { useRecoilValue } from 'recoil';

import Fruit from '../Fruit';
import { fruitState } from '../../state';

import './styles.css';

const FruitArea: React.FC = () => {
  const fruits = useRecoilValue(fruitState);

  return (
    <div className='fruit_area_container'>
      <h2>Frutas</h2>
      <div className='fruit_area_grid'>
        {fruits && fruits.length > 0 ? (
          fruits.map((fruit, index) => (
            <Fruit key={`${fruit.name}-${index}`} fruit={fruit} />
          ))
        ) : (
          <p>Não existe nenhuma fruta no cadastro</p>
        )}
      </div>
    </div>
  );
};

export default FruitArea;
