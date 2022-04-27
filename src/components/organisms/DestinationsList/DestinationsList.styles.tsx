import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  margin: 2rem 0 0;
  width: 100%;
  @media ${queries.biggerTablet} {
    grid-column: 1/4;
    grid-row: 2/3;
    max-width: 700px;
  }
  @media ${queries.laptop} {
    max-width: 920px;
  }
  @media ${queries.desktop} {
    max-width: 1100px;
  }
  @media (min-width: 1800px) {
    max-width: 1560px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  @media ${queries.phone} {
    max-width: 550px;
  }
  @media ${queries.tablet} {
    max-width: 650px;
  }
  @media ${queries.biggerTablet} {
    max-width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media ${queries.phone} {
    margin-bottom: 1.5rem;
  }
`;

export const DestinationsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin-bottom: 2rem;

  @media ${queries.biggerTablet} {
    flex-direction: row;
  }
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 1s ease-in-out;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const DestinationsListItem = styled.li`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 150px;
  width: 100%;
  padding: 2rem;
  text-decoration: none;
  cursor: pointer;
  @media ${queries.biggerTablet} {
    min-height: 300px;
  }
  @media ${queries.desktop} {
    min-height: 400px;
  }
  &:hover {
    ${Background} {
      img {
        transform: scale(1.2);
      }
    }
  }
`;

export const PlaceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h4 {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.sd};
    font-weight: 500;
    letter-spacing: 1px;
    z-index: 3;
    @media ${queries.biggerTablet} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  p {
    position: relative;
    color: rgba(255, 255, 255, 0.6);
    font-size: ${({ theme }) => theme.fontSize.xs};
    z-index: 3;
    display: flex;
    align-items: center;
    @media ${queries.biggerTablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
      align-items: initial;
      gap: 2px;
    }
    svg {
      fill: rgba(255, 255, 255, 0.6);
      transform: scale(0.5);
      @media ${queries.biggerTablet} {
        transform: scale(0.65);
      }
    }
  }
`;
