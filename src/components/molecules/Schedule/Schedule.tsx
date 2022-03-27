import React from 'react';
import PlaceDetail from 'components/atoms/PlaceDetail/PlaceDetail';
import { DummyDestinationList } from 'data/Destinations';
import { ContentWrapper, Description, StyledList, StyledViewWrapper, Wrapper } from './Schedule.styles';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { ArrowBtn } from 'components/atoms/ArrowBtn/ArrowBtn';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => {
  return (
    <StyledViewWrapper>
      <Wrapper>
        <ContentWrapper>
          <div>
            <Subtitle>My Schedule</Subtitle>
            <Description>See your upcoming events</Description>
          </div>
          <ArrowBtn>
            See all
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </ArrowBtn>
        </ContentWrapper>
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
      </Wrapper>
    </StyledViewWrapper>
  );
};

export default Schedule;
