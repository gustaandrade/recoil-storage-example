import { atom, AtomEffect, DefaultValue } from 'recoil';
import { Bucket, Fruit } from '../types';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet(newValue => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const bucketState = atom<Bucket[]>({
  key: 'bucketState',
  default: [],
  effects: [localStorageEffect('bucketState')]
});

export const fruitState = atom<Fruit[]>({
  key: 'fruitState',
  default: [],
  effects: [localStorageEffect('fruitState')]
});
