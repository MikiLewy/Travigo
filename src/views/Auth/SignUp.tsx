import { Form, StyledButton, StyledFormField, Wrapper, Message, StyledLink } from './Auth.styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useState } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router';

interface AuthProps {}

const SignUp: React.FC<AuthProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  type data = { name: string; email: string; password: string };
  const signupHandler = async (data: data | any) => {
    try {
      await axios({
        method: 'PUT',
        url: `${baseURL}/auth/signup`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });
      navigate('/login');
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <Wrapper>
      <h3>Sign up</h3>
      <Form onSubmit={handleSubmit(signupHandler)}>
        <StyledFormField id="name" label="Name" {...register('name', { required: true })} />
        {errors.name && <Message isError>You should provide an name</Message>}
        <StyledFormField id="email" type="email" label="Email" {...register('email', { required: true, minLength: 5 })} />
        {errors.email && <Message isError>Email should be at least 5 character long</Message>}
        <StyledFormField id="password" type="password" label="Password" {...register('password', { required: true, minLength: 5 })} />
        {errors.password && <Message isError>Password should be at least 5 character long</Message>}
        <StyledLink to="/login">
          Already have an account? <span>Sign in</span>
        </StyledLink>
        <StyledButton isWhite>Sign up</StyledButton>
      </Form>
      {error ? <ErrorMessage message={error} /> : ''}
    </Wrapper>
  );
};

export default SignUp;
