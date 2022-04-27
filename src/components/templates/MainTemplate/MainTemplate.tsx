import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import Menu from 'components/molecules/Menu/Menu';
import { Outlet } from 'react-router';

interface MainTemplateProps {
  // children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = () => {
  return (
    <Wrapper>
      <Outlet />
      <Menu />
    </Wrapper>
  );
};

export default MainTemplate;
