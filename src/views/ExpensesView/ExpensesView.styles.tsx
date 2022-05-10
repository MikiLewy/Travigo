import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${queries.biggerTablet} {
    grid-column: 2/-1;
    grid-row: 1/-1;
    display: grid;
    grid-template-columns: 550px 1fr;
    grid-template-rows: 200px 1fr;
    width: 100%;
    max-width: 1800px;
    margin-bottom: 3rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  gap: 2rem;
  width: 100%;
  @media ${queries.biggerTablet} {
    grid-column: 1/-1;
    max-width: 90%;
    display: grid;
    justify-content: flex-start;
  }
  @media ${queries.laptop} {
    max-width: 95%;
  }
`;

export const StyledViewWrapper = styled(ViewWrapper)`
  display: flex;
  margin-top: 0rem;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 2rem 1rem;
  @media ${queries.biggerTablet} {
    grid-row: 4;
  }
  @media ${queries.laptop} {
    max-width: 550px;
    grid-column: 1/2;
    grid-row: 1/3;
  }
  div {
    width: 100%;
    img {
      width: 100%;
      max-width: 400px;
    }
  }
`;
export const Card = styled.div<{ isSec?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  width: 100%;
  max-width: 550px;
  @media ${queries.tablet} {
    max-width: 650px;
  }
  @media ${queries.laptop} {
    min-width: 400px;
    max-width: 550px;
    grid-column: 2/3;
    grid-row: ${({ isSec }) => (isSec ? '1/2' : '2/3')};
  }
  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media ${queries.tablet} {
      gap: 1rem;
    }

    button {
      font-size: ${({ theme }) => theme.fontSize.xxs};
      max-width: 90px;
      @media ${queries.laptop} {
        font-size: ${({ theme }) => theme.fontSize.xs};
        max-width: 105px;
      }
    }
  }
`;

export const Price = styled.p`
  font-weight: 600;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fontSize.s};
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.sd};
    font-weight: 400;
  }
  @media ${queries.laptop} {
    margin-top: 1rem;
  }
`;

export const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.s};
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
  }
`;

export const ExpensesWrapper = styled(ViewWrapper)`
  margin: 0 0 7rem;
  padding: 2rem;
  grid-row: 2;
  @media ${queries.biggerTablet} {
    margin: 0;
  }
  @media ${queries.laptop} {
    width: 100%;
    max-width: 100%;
    grid-column: 1/3;
    grid-row: 3;
  }
`;

export const Message = styled.span<{ isError?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.dimmedBlack)};
  font-weight: 600;
  @media ${queries.phone} {
    font-size: ${({ theme, isError }) => (isError ? theme.fontSize.xs : theme.fontSize.s)};
  }
`;
