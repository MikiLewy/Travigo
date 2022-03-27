import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { ViewWrapper } from 'components/templates/ViewWrapper/ViewWrapper';

export const StyledViewWrapper = styled(ViewWrapper)`
  margin-bottom: 5rem;
  @media ${queries.biggerTablet} {
    margin-bottom: 0;
  }
  @media ${queries.desktop} {
    grid-column: 3;
    grid-row: 4;
  }
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 12px;
  @media ${queries.phone} {
    font-size: 14px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
