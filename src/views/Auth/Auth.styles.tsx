import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { queries } from 'helpers/mediaQueries';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledFormField = styled(FormField)`
  width: 250px;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  padding: 0.9rem 2rem;
  margin: 1rem auto;
`;

export const Message = styled.span<{ isError?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.dimmedBlack)};
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  color: #0c5dcf;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-decoration: none;
  span {
    text-decoration: underline;
  }
`;
