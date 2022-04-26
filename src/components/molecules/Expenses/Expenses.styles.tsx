import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper';
import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const StyledViewWrapper = styled(ViewWrapper)`
  display: none;
  @media ${queries.biggerTablet} {
    display: block;
    height: 100%;
    grid-column: 1/2;
    grid-row: 4/5;
  }
  @media ${queries.desktop} {
    max-width: 540px;
    width: 100%;
    grid-column: 1/3;
    grid-row: 3/5;
  }
  @media (min-width: 1800px) {
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
