import styled from 'styled-components';
import hiking from 'assets/images/hiking.jpg';
import notes from 'assets/images/notes.jpg';
import { queries } from 'helpers/mediaQueries';
import { Button } from 'components/atoms/Button/Button';

interface isNotes {
  isNotes: boolean;
}

export const Wrapper = styled.div<isNotes>`
  width: 100%;
  border-radius: 20px;
  background-image: ${({ isNotes }) => (isNotes ? `url(${notes})` : `url(${hiking})`)};
  background-size: cover;
  background-position: ${({ isNotes }) => (isNotes ? `bottom` : `left`)};
  padding: 1.5rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  color: white;
  max-width: 550px;
  @media ${queries.phone} {
    background-position: ${({ isNotes }) => (isNotes ? `center` : `left`)};
  }
  @media ${queries.tablet} {
    max-width: 650px;
  }
  @media ${queries.biggerTablet} {
    grid-column: 2;
    height: 100%;
  }
  @media ${queries.desktop} {
    margin-top: 0;
    max-width: 550px;
    grid-column: 3;
    grid-row: ${({ isNotes }) => (isNotes ? '3/4' : '2/3')};
  }
  @media (min-width: 1600px) {
    width: 500px;
  }
`;

export const Overlay = styled.div<isNotes>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: ${({ isNotes }) => (isNotes ? 'rgba(250, 151, 3, 0.4)' : 'rgba(7, 37, 63, 0.7)')};
  /* background-color: rgba(3, 140, 62, 0.6); */
  /* background-color: rgba(250, 151, 3, 0.6); */
`;

export const ContentWrapper = styled.div<isNotes>`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  @media ${queries.desktop} {
  }
`;

export const TextWrapper = styled.div<isNotes>`
  display: flex;
  flex-direction: column;
  width: ${(isNotes) => (isNotes ? ' 50%' : ' 60%')};
  gap: 5px;
  p:nth-of-type(2) {
    font-size: 10px;
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
`;

export const StyledButton = styled(Button)<isNotes>`
  margin-top: 10px;
  width: 100px;
  background-color: ${({ isNotes, theme }) => (isNotes ? 'rgb(250, 151, 3)' : theme.colors.navy)};
  border: ${({ isNotes, theme }) => (isNotes ? '1px solid rgb(250, 151, 3)' : `1px solid ${theme.colors.navy}`)};
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
