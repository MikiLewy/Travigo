import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;
export const ImageWrapper = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  @media ${queries.phone} {
    height: 75px;
    width: 75px;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;

export const PlaceName = styled.p`
  font-weight: 600;
  font-size: 15px;
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 60%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  img {
    width: 12px;
    @media ${queries.phone} {
      width: 15px;
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
