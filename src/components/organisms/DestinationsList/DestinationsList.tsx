import { ButtonsWrapper, ContentWrapper, Destinations, FilterBtn, InfoWrapper, Title, Wrapper, Button, Description } from './DestinationsList.styles';
import DestinationsListItem from 'components/molecules/DestinationsListItem/DestinationsListItem';
import { DestinationModel } from 'interfaces/DestinationModel';
import { DummyDestinationList } from 'data/Destinations';
import filter from 'assets/images/filter.svg';

const DestinationsList = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <InfoWrapper>
          <div>
            <Title>Best Destinations</Title>
            <Description>100 Destinations found</Description>
          </div>
          <ButtonsWrapper>
            <FilterBtn>
              <img src={filter} alt="" />
              Filters
            </FilterBtn>
            <Button>See all</Button>
          </ButtonsWrapper>
        </InfoWrapper>
        <Destinations>
          {DummyDestinationList.map((destination: DestinationModel) => (
            <DestinationsListItem key={destination.id} destination={destination}></DestinationsListItem>
          ))}
        </Destinations>
      </ContentWrapper>
    </Wrapper>
  );
};

export default DestinationsList;
