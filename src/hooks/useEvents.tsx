import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Event } from 'interfaces/Event';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useSelector } from 'react-redux';
import { State } from 'interfaces/State';

const initialValues = {
  _id: '',
  title: '',
  imageUrl: '',
  date: '',
  place: '',
  description: '',
};

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const { token } = useSelector((state: State) => state.auth);
  const [error, setError] = useState('');
  const [latestEvents, setLatestEvents] = useState<Event[]>([]);
  const { id } = useParams();
  const [event, setEvent] = useState<Event>(initialValues);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/schedule/events`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result.status !== 200) {
          throw new Error('Failed to fetch events');
        }
        setEvents(
          result.data.events.map((event: Event) => {
            return {
              ...event,
              imagePath: event.imageUrl,
            };
          })
        );
      } catch (err: any) {
        setError(err.response.data.message);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/schedule/latest-events`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result.status !== 200) {
          throw new Error('Failed to fetch events');
        }
        setLatestEvents(result.data.events);
      } catch (err: any) {
        setError(err.response.data.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const result = await axios.get(`${baseURL}/schedule/event/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setEvent(result.data.event);
        }
      } catch (err: any) {
        setError(err.response.data.message);
      }
    })();
  }, [id]);

  return {
    events,
    event,
    latestEvents,
    error,
  };
};
