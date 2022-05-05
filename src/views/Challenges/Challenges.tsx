import Headline from 'components/atoms/Headline/Headline';
import React from 'react';
import { Wrapper } from './Challenges.styles';

interface ChallengesProps {}

const Challenges: React.FC<ChallengesProps> = () => {
  return (
    <Wrapper>
      <Headline title="Challenges" content="Complete challenges to receive amazing rewards" />
      <h3>Work in progress...</h3>
    </Wrapper>
  );
};

export default Challenges;
