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
    max-width: 1800px;
    margin-bottom: 3rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  @media ${queries.biggerTablet} {
    grid-column: 1/-1;
    max-width: 90%;
  }
  @media ${queries.laptop} {
    max-width: 95%;
  }
`;
export const TicketsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media ${queries.phone} {
    padding: 2.5rem;
  }
  @media ${queries.laptop} {
    padding: 4rem;
  }
  &:hover {
    background-color: #145791;
    h3 {
      color: white;
    }

    p {
      color: white;
    }
  }

  h3 {
    width: 25%;
    font-size: ${({ theme }) => theme.fontSize.xs};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
  p {
    text-align: center;
    width: 25%;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  button {
    width: 25%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.colors.error};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;
export const Message = styled.p`
  padding: 4rem;
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
