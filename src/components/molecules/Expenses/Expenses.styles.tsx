import { ViewWrapper } from 'components/templates/ViewWrapper/ViewWrapper';
import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const StyledViewWrapper = styled(ViewWrapper)`
  display: none;
  @media ${queries.desktop} {
    display: block;
    grid-column: 2;
    grid-row: 4;
  }
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  div {
    p {
      font-size: 14px;
    }
  }
`;
export const ChartWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;
