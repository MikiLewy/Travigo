import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { queries } from 'helpers/mediaQueries';
import hiking from 'assets/images/hiking.jpg';
import trip from 'assets/images/trip.jpg';

interface isFavorites {
  isFavorites: boolean;
}

export const Wrapper = styled.div<isFavorites>`
  width: 100%;
  border-radius: 20px;
  background-image: ${({ isFavorites }) => (isFavorites ? `url(${trip})` : `url(${hiking})`)};
  background-size: cover;
  background-position: ${({ isFavorites }) => (isFavorites ? `center` : `left`)};
  padding: 1.5rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  color: white;
  max-width: 550px;
  @media ${queries.phone} {
    background-position: ${({ isFavorites }) => (isFavorites ? `center` : `left`)};
  }
  @media ${queries.tablet} {
    max-width: 650px;
  }
  @media ${queries.biggerTablet} {
    display: none;
  }
  @media (min-width: 1800px) {
    display: block;
    grid-column: 3;
    max-width: 520px;
    grid-row: ${({ isFavorites }) => (isFavorites ? '3/4' : '4/5')};
  }
`;

export const Overlay = styled.div<isFavorites>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: ${({ isFavorites }) => (isFavorites ? 'rgba(0, 0, 0, 0.7)' : 'rgba(7, 37, 63, 0.7)')};
`;

export const ContentWrapper = styled.div<isFavorites>`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  @media ${queries.desktop} {
  }
`;

export const TextWrapper = styled.div<isFavorites>`
  display: flex;
  flex-direction: column;
  width: ${(isFavorites) => (isFavorites ? ' 50%' : ' 60%')};
  gap: 5px;
  p:nth-of-type(2) {
    font-size: 10px;
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
`;

export const ChallengesBtn = styled(Button)`
  margin-top: 10px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.navy};
  border: ${({ theme }) => `1px solid ${theme.colors.navy}`};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-decoration: none;
  text-align: center;
  @media ${queries.laptop} {
    width: 120px;
    padding: 10px 30px;
  }
`;
export const FavoritesBtn = styled(Button)`
  margin-top: 10px;
  width: 100px;
  background-color: rgb(234, 25, 6);
  border: 1px solid rgb(234, 25, 6);
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-decoration: none;
  text-align: center;
  @media ${queries.laptop} {
    width: 120px;
    padding: 10px 30px;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.sd};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: rgba(255, 255, 255, 0.8);
  max-width: 30ch;
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    max-width: 28ch;
  }
`;
