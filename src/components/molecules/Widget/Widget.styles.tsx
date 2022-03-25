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
  /* justify-content: ${(isNotes) => (isNotes ? 'flex-start' : 'flex-end')}; */
  justify-content: flex-end;
`;

export const TextWrapper = styled.div<isNotes>`
  display: flex;
  flex-direction: column;
  width: ${(isNotes) => (isNotes ? ' 50%' : ' 60%')};
  gap: 5px;
  button {
    margin-top: 10px;
    width: 100px;
  }
  p:nth-of-type(2) {
    font-size: 10px;
  }
`;

export const StyledButton = styled(Button)<isNotes>`
  background-color: ${({ isNotes, theme }) => (isNotes ? 'rgb(250, 151, 3)' : theme.colors.navy)};
  border: ${({ isNotes, theme }) => (isNotes ? '1px solid rgb(250, 151, 3)' : `1px solid ${theme.colors.navy}`)};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const Description = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 30ch;
`;
