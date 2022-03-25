import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

interface ButtonProps {
  isWhite?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 7px 20px;
  border-radius: 12px;
  background-color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.navy)};
  border: ${({ theme, isWhite }) => (isWhite ? `1px solid ${theme.colors.black}` : `1px solid ${theme.colors.navy}`)};
  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.black : theme.colors.white)};
  @media ${queries.phone} {
    padding: 5px 25px;
  }
`;
