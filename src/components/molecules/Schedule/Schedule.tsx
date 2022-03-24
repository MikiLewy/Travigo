import React from 'react';
import PlaceDetail from 'components/atoms/PlaceDetail/PlaceDetail';
import { DummyDestinationList } from 'data/Destinations';
import { ContentWrapper, Description, StyledList, TitleWrapper, Wrapper } from './Schedule.styles';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Button } from 'components/atoms/Button/Button';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>
          <div>
            <Subtitle>My Schedule</Subtitle>
            <Description>See your upcoming events</Description>
          </div>
          <Button isWhite>See all</Button>
        </TitleWrapper>
        <StyledList>
          {DummyDestinationList.length > 0 ? (
            DummyDestinationList.map((destination) => (
              <PlaceDetail
                key={destination.id}
                isCard
                isSchelude
                name={destination.name}
                region={destination.region}
                date={destination.date}
                imageUrl={destination.imageUrl}
              />
            ))
          ) : (
            <p>no upcoming events</p>
          )}
        </StyledList>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Schedule;
