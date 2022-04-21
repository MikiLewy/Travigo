import { Event } from 'interfaces/Event';

export interface Destination extends Event {
  rating: string;
  price: number;
}
