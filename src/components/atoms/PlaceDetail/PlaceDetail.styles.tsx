import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dimmedBlack};
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
  font-size: 1.5rem;
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.s};
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
    font-size: ${({ theme }) => theme.fontSize.xxs};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;
