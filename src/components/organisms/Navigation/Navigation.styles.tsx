import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { queries } from 'helpers/mediaQueries';

interface isOpen {
  isOpen: boolean;
}

export const Wrapper = styled.nav<isOpen>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  height: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 4;
  padding: 2rem 1.5rem;
  overflow-y: scroll;
  @media ${queries.biggerTablet} {
    position: fixed;
    top: 0;
    left: 0;
    grid-column: 1;
    width: 250px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    overflow-y: auto;
  }
`;

export const BackWrapper = styled.button`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  p {
    font-size: 16px;
  }
  svg {
    transform: scale(0.85);
  }
  @media ${queries.biggerTablet} {
    display: none;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
  margin: 2rem 0 5rem;

  img {
    margin: 0 auto;
    width: 50%;
    @media ${queries.phone} {
      width: 35%;
    }
    @media ${queries.biggerTablet} {
      width: 65%;
      margin-bottom: 2rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  p {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    @media ${queries.biggerTablet} {
      font-size: 16px;
    }
  }
  svg {
    transform: scale(1.25);
    @media ${queries.biggerTablet} {
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
    /* @media ${queries.biggerTablet} {
      display: none;
    } */
  }
`;

export const StyledLogout = styled(Link)`
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  p {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: red;
    @media ${queries.biggerTablet} {
      font-size: 16px;
    }
  }
  svg {
    transform: scale(1.25);
    fill: red;
    @media ${queries.biggerTablet} {
      transform: scale(1);
    }
  }
`;
