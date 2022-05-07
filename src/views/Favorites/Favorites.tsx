import Headline from 'components/atoms/Headline/Headline';
import { ContentWrapper, FavoriteWrapper, Message, Wrapper } from './Favorites.styles';
import { useFavorites } from 'hooks/useFavorites';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  const { favoritesData, deleteFavoriteHandler, err } = useFavorites();

  return (
    <Wrapper>
      <Headline title="Favorites" content="See your favorites destinations" />
      <ContentWrapper>
        {favoritesData.length > 0 ? (
          favoritesData.map(({ destination, _id }) => (
            <FavoriteWrapper key={destination._id}>
              <h3>{destination.city}</h3>
              <p>{destination.date}</p>
              <p>{destination.price}$</p>
              <button onClick={() => deleteFavoriteHandler(_id)}>Remove</button>
            </FavoriteWrapper>
          ))
        ) : (
          <Message>You don't have any favorites destinations yet </Message>
        )}
        {err ? <ErrorMessage message={err} /> : ''}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Favorites;
