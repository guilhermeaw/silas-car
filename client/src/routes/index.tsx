import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import AddJobPage from '../pages/AddJob';
import EditJobPage from '../pages/EditJob';

import DashboardPage from '../pages/Dashboard';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { RequireAuth } from './RequireAuth';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />

      <Route
        path="/add-job"
        element={
          <RequireAuth>
            <AddJobPage />
          </RequireAuth>
        }
      />

      <Route
        path="/edit-job"
        element={
          <RequireAuth>
            <EditJobPage />
          </RequireAuth>
        }
      />
    </RouteList>
  </BrowserRouter>
);
