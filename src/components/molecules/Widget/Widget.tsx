import React from 'react';
import { Link } from 'react-router-dom';
import { ContentWrapper, Description, Overlay, TextWrapper, Title, Wrapper, FavoritesBtn, ChallengesBtn } from './Widget.styles';

interface ChallengesProps {
  isFavorites: boolean;
}

const Widget: React.FC<ChallengesProps> = ({ isFavorites }) => {
  return (
    <Wrapper isFavorites={isFavorites}>
      <Overlay isFavorites={isFavorites}></Overlay>
      <ContentWrapper isFavorites={isFavorites}>
        <TextWrapper isFavorites={isFavorites}>
          <Title>{isFavorites ? 'Favourites' : 'Challenges'}</Title>
          <Description>{isFavorites ? 'See your dreamed places around the world' : 'Complete challenges to receive amazing rewards'}</Description>
          <Description>{isFavorites ? '' : '0 of 244 challenges completed'}</Description>
          {isFavorites ? (
            <FavoritesBtn as={Link} to={`/favorites`}>
              Go!
            </FavoritesBtn>
          ) : (
            <ChallengesBtn as={Link} to={`/challenges`}>
              See all
            </ChallengesBtn>
          )}
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Widget;
