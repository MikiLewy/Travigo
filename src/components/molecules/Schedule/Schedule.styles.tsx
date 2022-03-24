import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  margin-top: 2rem;
  border-radius: 25px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
  max-width: 550px;
`;
export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
`;
export const Description = styled.p`
  font-size: 12px;
  @media ${queries.phone} {
    font-size: 14px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
