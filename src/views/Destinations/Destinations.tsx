import Headline from 'components/atoms/Headline/Headline';
import { Background, ContentWrapper, DestinationWrapper, Overlay, Wrapper } from './Destinations.styles';
import { Destination } from 'interfaces/Destination';
import { baseURL } from 'helpers/baseUrl';
import { useDestinations } from 'hooks/useDestinations';
import Loader from 'components/atoms/Loader/Loader';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

interface DestinationsProps {}

const Destinations: React.FC<DestinationsProps> = () => {
  const { destinations, error } = useDestinations();
  return (
    <Wrapper>
      <Headline title="Explore" content="Find and visit amazing places around the world" />
      <ContentWrapper>
        {destinations.length > 0 ? (
          destinations.map((destination: Destination) => (
            <DestinationWrapper key={destination._id} as={Link} to={`${destination._id}`}>
              <Overlay></Overlay>
              <Background>
                <img src={`${baseURL}/images/destinations/${destination.imageUrl}`} alt={destination.city} />
              </Background>
              <h4>{destination.city}</h4>
              <p>
                {destination.rating}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                </svg>
              </p>
              <p>{destination.price}$</p>
            </DestinationWrapper>
          ))
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <Loader />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Destinations;
