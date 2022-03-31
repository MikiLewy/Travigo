import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 1600px) {
    display: flex;
    gap: 20px;
    align-items: center;
    grid-column: 4;
    grid-row: 1/2;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 70px;
  width: 70px;
  img {
    object-position: top;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Rank = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: ${({ theme }) => theme.fontSize.s};
`;
export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sd};
  font-weight: 500;
`;
