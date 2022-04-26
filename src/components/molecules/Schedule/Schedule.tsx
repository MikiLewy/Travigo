import React from 'react';
import PlaceDetail from 'components/atoms/PlaceDetail/PlaceDetail';
import { ContentWrapper, Description, StyledList, StyledViewWrapper, Wrapper } from './Schedule.styles';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { ArrowBtn } from 'components/atoms/ArrowBtn/ArrowBtn';
import { Event } from 'interfaces/Event';
import { useEvents } from 'hooks/useEvents';
import { Link } from 'react-router-dom';
import { baseURL } from 'helpers/baseUrl';

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
            latestEvents.map((event: Event) => (
              <PlaceDetail
                key={event._id}
                title={event.title}
                place={event.place}
                date={event.date}
                imageUrl={`${baseURL}/images/${event.imageUrl}`}
              />
            ))
          ) : (
            <p>No upcoming events</p>
          )}
        </StyledList>
      </Wrapper>
    </StyledViewWrapper>
  );
};

export default Schedule;
