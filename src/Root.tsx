import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from 'features/auth/authSlice';
import { useNavigate } from 'react-router';
import { State } from 'interfaces/State';

const Root = () => {
  const { isAuth } = useSelector((store: State) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const autoLogoutHandler = (miliseconds: number) => {
    setTimeout(() => {
      dispatch(logout());
      navigate('/login');
    }, miliseconds);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      navigate('/login');
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      dispatch(logout());
      return;
    }
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    autoLogoutHandler(remainingMilliseconds);
    dispatch(login());
  }, []);

  return <>{isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp autoLogoutHandler={autoLogoutHandler} />}</>;
};

export default Root;
