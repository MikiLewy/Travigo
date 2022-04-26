import {
  Wrapper,
  DestinationsWrapper,
  InfoWrapper,
  ContentWrapper,
  Background,
  Overlay,
  DestinationsListItem,
  PlaceInfoWrapper,
} from './DestinationsList.styles';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { ArrowBtn } from 'components/atoms/ArrowBtn/ArrowBtn';
import { Destination } from 'interfaces/Destination';
import { baseURL } from 'helpers/baseUrl';
import { Link } from 'react-router-dom';
import { useDestinations } from 'hooks/useDestinations';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Loader from 'components/atoms/Loader/Loader';

const DestinationsList = () => {
  const { topDestinations, error } = useDestinations();

  return (
    <Wrapper>
      <ContentWrapper>
        <InfoWrapper>
          <div>
            <Subtitle>Top Destinations</Subtitle>
          </div>
          <ArrowBtn as={Link} to="/explore">
            See all
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </ArrowBtn>
        </InfoWrapper>
        <DestinationsWrapper>
          {topDestinations.length > 0 ? (
            topDestinations.map((destination: Destination) => (
              <DestinationsListItem key={destination._id}>
                <Overlay></Overlay>
                <Background>
                  <img src={`${baseURL}/images/destinations/${destination.imageUrl}`} alt={destination.city} />
                </Background>
                <PlaceInfoWrapper>
                  <h4>{destination.city}</h4>
                  <p>
                    {destination.rating}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </p>
                </PlaceInfoWrapper>
              </DestinationsListItem>
            ))
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <Loader />
          )}
        </DestinationsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default DestinationsList;
