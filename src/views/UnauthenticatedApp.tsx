import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from 'views/Auth/SignUp';
import Login from 'views/Auth/Login';
import TemplateWithoutSideMenu from 'components/templates/TemplateWithoutSideMenu/TemplateWithoutSideMenu';
interface UnauthenticatedAppProps {
  autoLogoutHandler: (n: number) => void;
}

const UnauthenticatedApp: React.FC<UnauthenticatedAppProps> = ({ autoLogoutHandler }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TemplateWithoutSideMenu />}>
          <Route index element={<Login autoLogoutHandler={autoLogoutHandler} />} />
          <Route path="/login" element={<Login autoLogoutHandler={autoLogoutHandler} />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default UnauthenticatedApp;
