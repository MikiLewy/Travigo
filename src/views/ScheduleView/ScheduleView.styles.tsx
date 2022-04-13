import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${queries.biggerTablet} {
    grid-column: 2/-1;
    grid-row: 1/-1;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 1rem 0 5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  gap: 2rem 0;
  width: 100%;
  max-width: 600px;
  margin-bottom: 5rem;
  @media ${queries.biggerTablet} {
    max-width: 95%;
    grid-column: 1/-1;
    grid-row: 2;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 15px;
  h3 {
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const ScheduleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  list-style: none;
  width: 100%;
`;

export const ScheduleListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.dimmedBlack};
  @media ${queries.biggerTablet} {
    padding: 2rem 2.5rem;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 600;
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media ${queries.biggerTablet} {
      font-size: ${({ theme }) => theme.fontSize.sd};
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1.5rem;
  @media ${queries.biggerTablet} {
    gap: 3rem;
  }
  button,
  a {
    text-decoration: none;
    background-color: transparent;
    border: none;
  }

  svg {
    cursor: pointer;
    @media ${queries.biggerTablet} {
      transform: scale(1.25);
    }
  }
`;
