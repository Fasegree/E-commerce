export interface IProduct {
  // name_: any;
  id: string;
  imgUrl: string[];
  title: string;
  rating: number;
  price: number;
  newPrice?: number;
  description: string;
  colors: string[];
  size: string[];
  dressStyle: string;
  category: string;
  addDate: Date;
  soldCount: number;
}
