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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 95%;
  margin: 2rem auto 0;
  padding: 0 2rem 2rem;
  gap: 10px;
`;

export const Title = styled.h3<{ isWhite?: boolean }>`
  margin-top: ${({ isWhite }) => (isWhite ? '' : '5rem')};
  position: ${({ isWhite }) => (isWhite ? 'relative' : 'auto')};
  text-transform: uppercase;
  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.dimmedBlack)};
  font-size: ${({ theme }) => theme.fontSize.m};
  z-index: ${({ isWhite }) => (isWhite ? '12' : '')};
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: 1px;
  }
`;

export const Background = styled.div<{ url: string }>`
  position: relative;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${queries.tablet} {
    height: 200px;
  }
  @media ${queries.laptop} {
    height: 250px;
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  p:nth-child(1) {
    font-weight: 600;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.sd};
    }
  }
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  text-align: left;
  div {
    width: 100%;
    max-width: 400px;
  }
  @media ${queries.phone} {
    width: 100%;
  }
  @media ${queries.biggerTablet} {
    width: 100%;
  }
  @media ${queries.desktop} {
    width: 100%;
    gap: 5px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
`;

export const Message = styled.span<{ isError?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.dimmedBlack)};
  font-weight: 600;
  @media ${queries.phone} {
    font-size: ${({ theme, isError }) => (isError ? theme.fontSize.xs : theme.fontSize.s)};
  }
`;

export const Buttons = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  button {
    margin: 0 5px;
  }
`;
