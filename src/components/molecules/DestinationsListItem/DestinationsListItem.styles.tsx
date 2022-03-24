import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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
