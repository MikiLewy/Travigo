import { Destinations, InfoWrapper, Description, Wrapper } from './DestinationsList.styles';
import DestinationsListItem from 'components/molecules/DestinationsListItem/DestinationsListItem';
import { DestinationModel } from 'interfaces/DestinationModel';
import { DummyDestinationList } from 'data/Destinations';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { ArrowBtn } from 'components/atoms/ArrowBtn/ArrowBtn';
import { ViewWrapper } from 'components/templates/ViewWrapper/ViewWrapper';

const DestinationsList = () => {
  return (
    <ViewWrapper>
      <Wrapper>
        <InfoWrapper>
          <div>
            <Subtitle>Best Destinations</Subtitle>
            <Description>{DummyDestinationList.length} Destinations found</Description>
          </div>
          <ArrowBtn>
            See all
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </ArrowBtn>
          {/* <Button>See all</Button> */}
        </InfoWrapper>
        <Destinations>
          {DummyDestinationList.length > 0 ? (
            DummyDestinationList.map((destination: DestinationModel) => (
              <DestinationsListItem key={destination.id} destination={destination}></DestinationsListItem>
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
