import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import DashboardPage from '../pages/Dashboard';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouteList>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </RouteList>
    </BrowserRouter>
  );
};
