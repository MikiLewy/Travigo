import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useParams } from 'react-router';
import { Destination } from 'interfaces/Destination';

export const useDestinations = () => {
  const { id } = useParams();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [destination, setDestination] = useState<Destination>();
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
        if (id) {
          const result = await axios.get(`${baseURL}/destination/${id}`);
          setDestination(result.data.destination);
        }
      } catch (err) {
        setError('Something went wrong. Try again later');
      }
    })();
  }, [id]);

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
    destinations,
    destination,
    topDestinations,
    error,
  };
};
