export interface Bucket {
  name: string;
  totalCapacity: number;
  usedCapacity: number;
  fruits: Fruit[];
}

export interface Fruit {
  name: string;
  price: number;
}
