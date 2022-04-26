import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Event } from 'interfaces/Event';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';

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
  const [error, setError] = useState('');
  const [latestEvents, setLatestEvents] = useState<Event[]>([]);
  const { id } = useParams();
  const [event, setEvent] = useState<Event>(initialValues);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/schedule/events`);
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
      } catch (err) {
        setError('Something went wrong.Try again later');
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/schedule/latest-events`);
        if (result.status !== 200) {
          throw new Error('Failed to fetch events');
        }
        setLatestEvents(result.data.events);
      } catch (err) {
        setError('Something went wrong.Try again later');
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const result = await axios.get(`${baseURL}/schedule/event/${id}`);
          setEvent(result.data.event);
        }
      } catch (err) {
        setError('Something went wrong.Try again later');
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
