import styled from 'styled-components';
import hiking from 'assets/images/hiking.jpg';
import trip from 'assets/images/trip.jpg';
import { queries } from 'helpers/mediaQueries';
import { Button } from 'components/atoms/Button/Button';

interface isFavourites {
  isFavourites: boolean;
}

export const Wrapper = styled.div<isFavourites>`
  width: 100%;
  border-radius: 20px;
  background-image: ${({ isFavourites }) => (isFavourites ? `url(${trip})` : `url(${hiking})`)};
  background-size: cover;
  background-position: ${({ isFavourites }) => (isFavourites ? `center` : `left`)};
  padding: 1.5rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  color: white;
  max-width: 550px;
  @media ${queries.phone} {
    background-position: ${({ isFavourites }) => (isFavourites ? `center` : `left`)};
  }
  @media ${queries.tablet} {
    max-width: 650px;
  }
  @media ${queries.biggerTablet} {
    display: none;
    grid-column: ${({ isFavourites }) => (isFavourites ? '1/2' : '2/3')};
    height: 100%;
    grid-row: ${({ isFavourites }) => (isFavourites ? '3/4' : '3/4')};
    max-width: 400px;
  }
  @media ${queries.desktop} {
    margin-top: 0;
    max-width: 550px;
  }
  @media (min-width: 1800px) {
    display: block;
    grid-column: 3;
    max-width: 520px;
    grid-row: ${({ isFavourites }) => (isFavourites ? '3/4' : '4/5')};
  }
`;

export const Overlay = styled.div<isFavourites>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: ${({ isFavourites }) => (isFavourites ? 'rgba(0, 0, 0, 0.7)' : 'rgba(7, 37, 63, 0.7)')};
`;

export const ContentWrapper = styled.div<isFavourites>`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  @media ${queries.desktop} {
  }
`;

export const TextWrapper = styled.div<isFavourites>`
  display: flex;
  flex-direction: column;
  width: ${(isFavourites) => (isFavourites ? ' 50%' : ' 60%')};
  gap: 5px;
  p:nth-of-type(2) {
    font-size: 10px;
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
`;

export const StyledButton = styled(Button)<isFavourites>`
  margin-top: 10px;
  width: 100px;
  background-color: ${({ isFavourites, theme }) => (isFavourites ? 'rgb(234, 25, 6)' : theme.colors.navy)};
  border: ${({ isFavourites, theme }) => (isFavourites ? '1px solid rgb(234, 25, 6)' : `1px solid ${theme.colors.navy}`)};
  text-decoration: none;
  text-align: center;
  @media ${queries.laptop} {
    width: 120px;
    font-size: ${({ theme }) => theme.fontSize.xxs};
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
