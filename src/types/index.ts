export interface Bucket {
  name: string;
  capacity: number;
  fruits: Fruit[];
}

export interface Fruit {
  name: string;
  price: number;
}
