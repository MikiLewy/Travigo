import React from 'react';
import { ContentWrapper, Description, Overlay, TextWrapper, Title, Wrapper, StyledButton } from './Widget.styles';

interface ChallengesProps {
  isNotes: boolean;
}

const Widget: React.FC<ChallengesProps> = ({ isNotes }) => {
  return (
    <Wrapper isNotes={isNotes}>
      <Overlay isNotes={isNotes}></Overlay>
      <ContentWrapper isNotes={isNotes}>
        <TextWrapper isNotes={isNotes}>
          <Title>{isNotes ? 'Notes' : 'Challenges'}</Title>
          <Description>
            {isNotes ? "Plan your trip with our notes feature and don't forget anything" : 'Complete challenges to receive amazing rewards'}
          </Description>
          <Description>{isNotes ? '' : '0 of 244 challenges completed'}</Description>
          <StyledButton isNotes={isNotes}>{isNotes ? 'Go!' : ' See all'}</StyledButton>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Widget;
