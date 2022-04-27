import React from 'react';
import { Outlet } from 'react-router';

interface TemplateWithoutSideMenuProps {}

const TemplateWithoutSideMenu: React.FC<TemplateWithoutSideMenuProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default TemplateWithoutSideMenu;
