import React, { useState } from 'react';
import Headline from 'components/atoms/Headline/Headline';
import UserProfile from 'components/molecules/UserProfile/UserProfile';
import { Form, StyledBtn, Wrapper } from './Settings.styles';
import FormField from 'components/molecules/FormField/FormField';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const [inputValues, setInputValues] = useState({
    userName: 'Jeremy Whiteman',
    email: 'test@test.com',
    password: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputValues({
      ...inputValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleChangeUserData = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Headline title="Settings" content="Change your existing settings " />
      <UserProfile />
      <Form method="Post">
        <h5>Change your user information</h5>
        <FormField id="userName" type="text" value={inputValues.userName} name="userName" onChange={handleInputChange} label="Name" />
        <FormField id="email" type="email" value={inputValues.email} name="email" onChange={handleInputChange} label="E-mail" />
        <FormField id="image" type="file" name="image" label="Image" />
        <FormField id="password" type="password" value={inputValues.password} name="password" onChange={handleInputChange} label="Password" />
        <StyledBtn onClick={handleChangeUserData}>Save</StyledBtn>
      </Form>
    </Wrapper>
  );
};

export default Settings;
