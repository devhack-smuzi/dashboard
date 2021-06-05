import React from 'react';
import 'mf4Navigation/Bundle';

const Header = React.lazy(() => import('mf4Navigation/Header'));
const Sidebar = React.lazy(() => import('mf4Navigation/Sidebar'));

const Dashboard = () => {
  return (
    <div>
      <React.Suspense fallback={<div>....loading Header</div>}>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={<div>....loading Header</div>}>
        <Sidebar />
      </React.Suspense>
    </div>
  );
};

export default Dashboard;
