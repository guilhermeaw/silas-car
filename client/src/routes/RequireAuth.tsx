import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../store/Auth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
