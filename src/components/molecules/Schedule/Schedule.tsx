import React from 'react';
import PlaceDetail from 'components/atoms/PlaceDetail/PlaceDetail';
import { ContentWrapper, Description, StyledList, StyledViewWrapper, Wrapper } from './Schedule.styles';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { ArrowBtn } from 'components/atoms/ArrowBtn/ArrowBtn';
// import { Destination } from 'interfaces/Destination';
import { useEvents } from 'hooks/useEvents';
import { Link } from 'react-router-dom';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => {
  const { latestEvents } = useEvents();

  return (
    <StyledViewWrapper>
      <Wrapper>
        <ContentWrapper>
          <div>
            <Subtitle>My Schedule</Subtitle>
            <Description>See your upcoming events</Description>
          </div>
          <ArrowBtn as={Link} to={`/schedule`}>
            See all
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </ArrowBtn>
        </ContentWrapper>
        <StyledList>
          {latestEvents.length > 0 ? (
            latestEvents.map((event: any) => (
              <PlaceDetail
                key={event._id}
                isCard
                isSchelude
                title={event.title}
                place={event.place}
                date={event.date}
                imageUrl={`http://localhost:8080/images/${event.imageUrl}`}
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
