import { ButtonsWrapper, ContentWrapper, Destinations, FilterBtn, InfoWrapper, Wrapper, Description } from './DestinationsList.styles';
import DestinationsListItem from 'components/molecules/DestinationsListItem/DestinationsListItem';
import { DestinationModel } from 'interfaces/DestinationModel';
import { DummyDestinationList } from 'data/Destinations';
import filter from 'assets/images/filter.svg';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Button } from 'components/atoms/Button/Button';

const DestinationsList = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <InfoWrapper>
          <div>
            <Subtitle>Best Destinations</Subtitle>
            <Description>{DummyDestinationList.length} Destinations found</Description>
          </div>
          {/* <ButtonsWrapper> */}
          {/* <FilterBtn>
              <img src={filter} alt="" />
              Filters
            </FilterBtn> */}
          <Button>See all</Button>
          {/* </ButtonsWrapper> */}
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
      </ContentWrapper>
    </Wrapper>
  );
};

export default DestinationsList;
