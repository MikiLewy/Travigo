import React, { useState } from 'react';
import Headline from 'components/atoms/Headline/Headline';
import UserProfile from 'components/molecules/UserProfile/UserProfile';
import { Form, InputWrapper, StyledBtn } from './Profile.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const [inputValues, setInputValues] = useState({
    userName: 'Jeremy Whiteman',
    email: 'test@test.com',
    password: 'test1234',
  });
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValues({
      ...inputValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <>
      <Headline title="Profile" content="Change your user information" />
      <UserProfile />
      <Form method="Post">
        <h5>Change your user information</h5>
        <InputWrapper>
          <Label htmlFor="userName">Name</Label>
          <Input id="userName" type="text" value={inputValues.userName} name="userName" onChange={handleInputChange} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" value={inputValues.email} name="email" onChange={handleInputChange} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" name="image" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={inputValues.password} name="password" onChange={handleInputChange} />
        </InputWrapper>
        <StyledBtn>Save</StyledBtn>
      </Form>
    </>
  );
};

export default Profile;
