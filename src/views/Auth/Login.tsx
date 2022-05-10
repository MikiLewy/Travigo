import React from 'react';
import { Form, StyledButton, StyledFormField, Wrapper, Message, StyledLink } from './Auth.styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useState } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login, logout } from 'features/auth/authSlice';

interface LoginProps {
  autoLogoutHandler: (n: number) => void;
}

type data = { name: string; email: string; password: string };

const Login: React.FC<LoginProps> = ({ autoLogoutHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginHandler = async (data: data | any) => {
    try {
      const result = await axios({
        method: 'POST',
        url: `${baseURL}/auth/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      if (result.status !== 200 && result.status !== 201) {
        setError('Wrong password');
      }
      const remainingMiliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMiliseconds);
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('userId', result.data.userId);
      localStorage.setItem('userName', result.data.userName);
      localStorage.setItem('expiryDate', expiryDate.toISOString());
      dispatch(login());
      autoLogoutHandler(remainingMiliseconds);
      navigate('/dashboard');
    } catch (err: any) {
      dispatch(logout());
      setError(err.response.data.message);
    }
  };
  return (
    <Wrapper>
      <h3>Login</h3>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <StyledFormField id="email" type="email" label="Email" {...register('email', { required: true, minLength: 5 })} />
        {errors.email && <Message isError>Email should be at least 5 character long</Message>}
        <StyledFormField id="password" type="password" label="Password" {...register('password', { required: true, minLength: 5 })} />
        {errors.password && <Message isError>Password should be at least 5 character long</Message>}
        <StyledLink to="/signup">
          Don't have an account yet? <span>Sign up now</span>
        </StyledLink>
        <StyledButton isWhite>Login</StyledButton>
      </Form>
      {error ? <ErrorMessage message={error} /> : ''}
    </Wrapper>
  );
};

export default Login;
