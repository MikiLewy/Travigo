import React from 'react';
import { Wrapper } from './Headline.styles';

interface HeadlineProps {
  title: string;
  content: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, content }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{content}</p>
    </Wrapper>
  );
};

export default Headline;
