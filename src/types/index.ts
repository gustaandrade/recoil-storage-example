export interface Bucket {
  id: string;
  name: string;
  totalCapacity: number;
  usedCapacity: number;
  fruits: Fruit[];
}

export interface Fruit {
  id: string;
  name: string;
  price: number;
}
