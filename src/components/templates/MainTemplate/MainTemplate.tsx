import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import Menu from 'components/molecules/Menu/Menu';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Menu />
    </Wrapper>
  );
};

export default MainTemplate;
