import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${queries.biggerTablet} {
    grid-column: 2/-1;
    grid-row: 1/-1;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 1800px;
    margin-bottom: 3rem;
  }
`;

export const ContentWrapper = styled.div`
  margin: 2rem 0 7rem;
  display: grid;
  width: 100%;
  gap: 20px;
  @media ${queries.phone} {
    flex-direction: row;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(46%, 48%));
  }
  @media ${queries.biggerTablet} {
    grid-template-columns: repeat(auto-fill, minmax(30%, 32%));
    gap: 10px;
    margin: 2rem 0 0;
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

export const DestinationWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  min-height: 200px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    ${Background} {
      img {
        transform: scale(1.2);
      }
    }
  }
  @media ${queries.phone} {
    width: 100%;
  }
  @media ${queries.biggerTablet} {
    width: 100%;
    min-height: 300px;
    padding: 1.5rem;
  }
  @media ${queries.laptop} {
    padding: 2.5rem;
  }

  h4 {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.sd};
    font-weight: 600;
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
    @media ${queries.biggerTablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  p:nth-of-type(1) {
    display: flex;
    align-items: center;
    @media ${queries.biggerTablet} {
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
