import React from 'react';

import MountComponent from './components/MountComponent';

import { mount as mountAuth } from 'auth/AuthApp';
import { mount as mountDashboard } from 'dashboard/DashboardApp';

export default () => {
  return (
    <div>
      <h1>Container</h1>
      <MountComponent mount={mountAuth} />
      <MountComponent mount={mountDashboard} />
    </div>
  )
}
