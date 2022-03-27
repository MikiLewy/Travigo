import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media ${queries.biggerTablet} {
    grid-column: 2;
  }
  @media ${queries.desktop} {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  @media ${queries.phone} {
    width: 70px;
    height: 70px;
  }
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

export const Messagge = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  @media ${queries.phone} {
    font-size: 14px;
  }
  @media ${queries.phone} {
    font-size: 14px;
  }
`;
export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 500;
`;
