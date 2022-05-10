import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useSelector } from 'react-redux';
import { State } from 'interfaces/State';
import { TicketsData } from 'interfaces/Tickets';

export const useTickets = () => {
  const [error, setError] = useState('');
  const [tickets, setTickets] = useState<TicketsData[]>([]);
  const { token } = useSelector((state: State) => state.auth);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/tickets`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTickets(result.data.tickets);
      } catch (err: any) {
        setError(err);
      }
    })();
  }, []);

  return {
    error,
    tickets,
  };
};
