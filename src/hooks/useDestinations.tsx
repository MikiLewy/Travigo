import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useParams } from 'react-router';
import { Destination } from 'interfaces/Destination';
import { useSelector } from 'react-redux';
import { State } from 'interfaces/State';

export const useDestinations = () => {
  const { id } = useParams();
  const { token } = useSelector((state: State) => state.auth);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [destination, setDestination] = useState<Destination>();
  const [topDestinations, setTopDestinations] = useState<Destination[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/destinations`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDestinations(result.data.destinations);
      } catch (err: any) {
        setError(err.response.data.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const result = await axios.get(`${baseURL}/destination/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setDestination(result.data.destination);
        }
      } catch (err: any) {
        setError(err.response.data.message);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/top-destinations`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result.status !== 200) {
          throw new Error('Failed to fetch destinations');
        }
        setTopDestinations(result.data.destinations);
      } catch (err: any) {
        setError(err.response.data.message);
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
