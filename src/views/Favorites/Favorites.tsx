import Headline from 'components/atoms/Headline/Headline';
import React from 'react';
import { ContentWrapper, FavoriteWrapper, Message, Wrapper } from './Favorites.styles';

interface FavoritesProps {}

const favoritesData = [
  {
    _id: '1',
    name: 'Eleanor Pena',
    date: '2022-08-07',
    price: '150$',
  },
  {
    _id: '2',
    name: 'Eleanor Pena',
    date: '2022-08-07',
    price: '150$',
  },
  {
    _id: '3',
    name: 'Eleanor Pena',
    date: '2022-08-07',
    price: '150$',
  },
];

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <Wrapper>
      <Headline title="Favorites" content="See your favorites destinations" />
      <ContentWrapper>
        {favoritesData.length > 0 ? (
          favoritesData.map((favorite) => (
            <FavoriteWrapper key={favorite._id}>
              <h3>{favorite.name}</h3>
              <p>{favorite.date}</p>
              <p>{favorite.price}</p>
              <button>Remove</button>
            </FavoriteWrapper>
          ))
        ) : (
          <Message>You don't have any favorites destinations yet </Message>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Favorites;
