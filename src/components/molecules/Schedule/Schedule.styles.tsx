import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper';

export const StyledViewWrapper = styled(ViewWrapper)`
  margin-bottom: 7rem;
  width: 100%;

  @media ${queries.biggerTablet} {
    margin-bottom: 0;
  }
  @media ${queries.biggerTablet} {
    grid-column: 2/3;
    grid-row: 4/5;
  }
  @media ${queries.desktop} {
    max-width: 540px;
    grid-column: 2/3;
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
