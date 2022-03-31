import React from 'react';
import { Wrapper } from './Headline.styles';

interface HeadlineProps {}

const Headline: React.FC<HeadlineProps> = () => {
  return (
    <Wrapper>
      <h2>Hello, Jeremy! 👋</h2>
      <p>Welcome back and explore the world.</p>
    </Wrapper>
  );
};

export default Headline;
