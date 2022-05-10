import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Headline from 'components/atoms/Headline/Headline';
import { useTickets } from 'hooks/useTickets';
import React from 'react';
import { useNavigate } from 'react-router';
import { ContentWrapper, Message, TicketsWrapper, Wrapper } from './Tickets.styles';

interface TicketsProps {}

const Tickets: React.FC<TicketsProps> = () => {
  const navigate = useNavigate();
  const { tickets, error } = useTickets();
  return (
    <Wrapper>
      <Headline title="Tickets" content="See your purchased tickets " />
      <ContentWrapper>
        {tickets.length > 0 ? (
          tickets.map(({ _id, destination }) => (
            <TicketsWrapper key={_id} onClick={() => navigate(`/explore/${destination._id}`)}>
              <h3>{destination.city}</h3>
              <p>{destination.country}</p>
              <p>{destination.price}$</p>
              <p>{destination.date}</p>
            </TicketsWrapper>
          ))
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <Message>You don't have any tickets yet</Message>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Tickets;
