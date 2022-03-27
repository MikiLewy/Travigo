import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Container = styled.div<{ isCard: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
  padding-right: 0.2rem;
  @media ${queries.phone} {
    gap: 15px;
  }
`;
export const ImageWrapper = styled.div`
  height: 60px;
  min-width: 60px;
  max-width: 60px;
  border-radius: 15px;
  overflow: hidden;
  @media ${queries.phone} {
    height: 75px;
    min-width: 75px;
    max-width: 75px;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 75%;
`;
export const PlaceName = styled.p`
  font-weight: 600;
  font-size: 15px;
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  @media ${queries.phone} {
    gap: 12px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;

  svg {
    transform: scale(0.5);
    @media ${queries.phone} {
      transform: scale(0.6);
    }
  }
  p {
    font-size: 12px;
    @media ${queries.phone} {
      font-size: 14px;
    }
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 15px;
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Day = styled.p`
  font-size: 10px;
  @media ${queries.phone} {
    font-size: 14px;
  }
`;
