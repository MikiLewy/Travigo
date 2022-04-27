import React from 'react';
import { Link } from 'react-router-dom';
import { ContentWrapper, Description, Overlay, TextWrapper, Title, Wrapper, StyledButton } from './Widget.styles';

interface ChallengesProps {
  isFavourites: boolean;
}

const Widget: React.FC<ChallengesProps> = ({ isFavourites }) => {
  return (
    <Wrapper isFavourites={isFavourites}>
      <Overlay isFavourites={isFavourites}></Overlay>
      <ContentWrapper isFavourites={isFavourites}>
        <TextWrapper isFavourites={isFavourites}>
          <Title>{isFavourites ? 'Favourites' : 'Challenges'}</Title>
          <Description>{isFavourites ? 'See your dreamed places around the world' : 'Complete challenges to receive amazing rewards'}</Description>
          <Description>{isFavourites ? '' : '0 of 244 challenges completed'}</Description>
          <StyledButton isFavourites={isFavourites} as={Link} to={isFavourites ? `/favourites` : `/challenges`}>
            {isFavourites ? 'Go!' : ' See all'}
          </StyledButton>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Widget;
