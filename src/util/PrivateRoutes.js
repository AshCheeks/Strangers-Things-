import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = (token, setToken, loggedIn) => {
  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
