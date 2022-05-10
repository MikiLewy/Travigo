export interface TicketsData {
  _id: string;
  destination: {
    _id: string;
    city: string;
    country: string;
    date: string;
    rating: string;
    price: number;
    description: string;
    imageUrl: string;
  };
}
