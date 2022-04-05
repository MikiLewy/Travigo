import React from 'react';
import { Wrapper } from './Loader.styles';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <Wrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

export default Loader;
