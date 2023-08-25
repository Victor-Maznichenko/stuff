export interface IProduct {
  title: string;
  id: number;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
  };
  images: Array<string>;
  quantity: number;
  addToCart?: () => void;
  addToFavorite?: () => void;
}
