export interface FavoritesData {
  _id: string;
  destination: {
    _id: string;
    city: string;
    continent: string;
    date: string;
    rating: string;
    price: number;
    description: string;
    imageUrl: string;
  };
}
