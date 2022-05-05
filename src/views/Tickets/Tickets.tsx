import Headline from 'components/atoms/Headline/Headline';
import React from 'react';
import { ContentWrapper, Wrapper } from './Tickets.styles';

interface TicketsProps {}

const Tickets: React.FC<TicketsProps> = () => {
  return (
    <Wrapper>
      <Headline title="Tickets" content="See your purchased tickets " />
      <ContentWrapper>
        <h3>Work in progress...</h3>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Tickets;
