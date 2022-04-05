import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
    overflow-y: hidden;
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
    font-size: ${({ theme }) => theme.fontSize.s};
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
    margin: 10px auto 0;
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

export const StyledLink = styled(NavLink).attrs((props) => ({
  className: ({ isActive }) => (isActive ? ' active' : ''),
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  svg {
    transform: scale(1.25);
    fill: rgba(0, 0, 0, 0.7);
    @media ${queries.biggerTablet} {
      transform: scale(1);
    }
  }
  &.active {
    svg {
      fill: ${({ theme }) => theme.colors.navy};
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const StyledLogout = styled(NavLink)`
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: red;
  }
  svg {
    transform: scale(1.25);
    fill: red;
    @media ${queries.biggerTablet} {
      transform: scale(1);
    }
  }
`;
