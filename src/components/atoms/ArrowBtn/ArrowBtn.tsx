import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    margin-left: -1px;
    transform: scale(0.5);
    fill: rgba(0, 0, 0, 0.8);
  }
  @media ${queries.phone} {
    font-size: 16px;
    svg {
      transform: scale(0.6);
      fill: rgba(0, 0, 0, 0.8);
    }
  }
`;
