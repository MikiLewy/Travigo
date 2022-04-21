import { Destinations, InfoWrapper, Description, Wrapper } from './DestinationsList.styles';
import DestinationsListItem from 'components/molecules/DestinationsListItem/DestinationsListItem';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { ArrowBtn } from 'components/atoms/ArrowBtn/ArrowBtn';
import { ViewWrapper } from 'components/templates/ViewWrapper/ViewWrapper';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Destination } from 'interfaces/Destination';

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get('http://localhost:8080/best-destinations');
        if (result.status !== 200) {
          throw new Error('Failed to fetch destinations');
        }
        setDestinations(result.data.destinations);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <ViewWrapper>
      <Wrapper>
        <InfoWrapper>
          <div>
            <Subtitle>Best Destinations</Subtitle>
            <Description>{destinations.length} Destinations found</Description>
          </div>
          <ArrowBtn>
            See all
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </ArrowBtn>
        </InfoWrapper>
        <Destinations>
          {destinations.length > 0 ? (
            destinations.map((destination: Destination) => (
              <DestinationsListItem key={destination._id} destination={destination}></DestinationsListItem>
            ))
          ) : (
            <p>No destinations find try again later</p>
          )}
        </Destinations>
      </Wrapper>
    </ViewWrapper>
  );
};

export default DestinationsList;
