import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dimmedBlack};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  cursor: pointer;
  svg {
    margin-left: -1px;
    transform: scale(0.5);
    fill: ${({ theme }) => theme.colors.dimmedBlack};
  }
  @media ${queries.phone} {
    font-size: 16px;
    svg {
      transform: scale(0.6);
      fill: ${({ theme }) => theme.colors.dimmedBlack};
    }
  }
`;
