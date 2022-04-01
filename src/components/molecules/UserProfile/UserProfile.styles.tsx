import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media ${queries.phone} {
    margin-top: 5rem;
  }
  @media ${queries.biggerTablet} {
    grid-column: 2;
    grid-row: 2/3;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-bottom: 3rem;
  }
  @media ${queries.desktop} {
    grid-column: 3;
    grid-row: 1/2;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 80px;
  width: 80px;
  @media ${queries.tablet} {
    height: 100px;
    width: 100px;
  }
  @media ${queries.biggerTablet} {
    height: 90px;
    width: 90px;
  }
  @media (min-width: 1600px) {
    width: 80px;
    height: 80px;
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
  align-items: center;
  @media ${queries.biggerTablet} {
    align-items: flex-start;
  }
`;

export const Rank = styled.p`
  color: ${({ theme }) => theme.colors.dimmedBlack};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media ${queries.biggerTablet} {
    margin-left: 2px;
  }
`;
export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.dimmedBlack};
  font-size: ${({ theme }) => theme.fontSize.sd};
  font-weight: 600;
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
