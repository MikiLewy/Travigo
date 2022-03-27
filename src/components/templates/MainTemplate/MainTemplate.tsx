import React from 'react';
import { Wrapper } from './MainTemplate.styles';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainTemplate;
