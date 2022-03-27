import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media ${queries.phone} {
    margin-bottom: 1.5rem;
  }
`;

export const Destinations = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.p`
  font-size: 12px;
  @media ${queries.phone} {
    font-size: 14px;
  }
`;
