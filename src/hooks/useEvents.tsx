import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Event } from 'interfaces/Event';
import axios from 'axios';

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
  const [latestEvents, setLatestEvents] = useState<Event[]>([]);
  const { id } = useParams();
  const [event, setEvent] = useState<Event>(initialValues);

  useEffect(() => {
    (async () => {
      const result = await axios.get('http://localhost:8080/schedule/events');
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
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const result = await axios.get('http://localhost:8080/schedule/latest-events');
      if (result.status !== 200) {
        throw new Error('Failed to fetch events');
      }
      setLatestEvents(result.data.events);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (id) {
        const result = await axios.get(`http://localhost:8080/schedule/event/${id}`);
        setEvent(result.data.event);
      }
    })();
  }, [id]);

  return {
    events,
    event,
    latestEvents,
  };
};
