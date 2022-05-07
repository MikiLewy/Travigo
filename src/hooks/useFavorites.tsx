import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useSelector } from 'react-redux';
import { State } from 'interfaces/State';
import { FavoritesData } from 'interfaces/Favorites';
import { useParams } from 'react-router-dom';

export const useFavorites = () => {
  const [err, setError] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const { token } = useSelector((state: State) => state.auth);
  const [favoritesData, setFavoritesData] = useState<FavoritesData[]>([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFavoritesData(result.data.favorites);
      } catch (err: any) {
        setError(err.response.data.message);
      }
    })();
  }, []);
  const deleteFavoriteHandler = async (id: string) => {
    try {
      const result = await axios(`${baseURL}/favorites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
      });
      console.log(result);
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  const addToFavoriteHandler = async () => {
    try {
      await axios.get(`${baseURL}/favorites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsAdded(true);
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return {
    addToFavoriteHandler,
    isAdded,
    err,
    favoritesData,
    deleteFavoriteHandler,
  };
};
