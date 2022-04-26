import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL } from 'helpers/baseUrl';
import { Destination } from 'interfaces/Destination';

export const useDestinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [topDestinations, setTopDestinations] = useState<Destination[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/destinations`);
        setDestinations(result.data.destinations);
      } catch (err) {
        setError('Something went wrong. Try again later');
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/top-destinations`);
        if (result.status !== 200) {
          throw new Error('Failed to fetch destinations');
        }
        setTopDestinations(result.data.destinations);
      } catch (err) {
        setError('Something went wrong. Try again later');
      }
    })();
  }, []);

  return {
    error,
    destinations,
    topDestinations,
  };
};
