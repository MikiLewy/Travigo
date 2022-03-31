import { ViewWrapper } from 'components/templates/ViewWrapper/ViewWrapper';
import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const StyledViewWrapper = styled(ViewWrapper)`
  display: none;
  @media ${queries.desktop} {
    display: block;
    height: 100%;
    grid-column: 2;
    grid-row: 4;
  }
  @media (min-width: 1600px) {
    width: 500px;
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  div {
    p {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;
export const ChartWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;
