import React from 'react';
import { Wrapper } from './ErrorMessage.styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Wrapper>
      <p>{message}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
