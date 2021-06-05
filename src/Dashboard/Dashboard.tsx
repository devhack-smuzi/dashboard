import React, { useEffect } from 'react';
import 'mf4Navigation/Bundle';

import './styles.css';

const Header = React.lazy(() => import('mf4Navigation/Header'));
const Sidebar = React.lazy(() => import('mf4Navigation/Sidebar'));

const Dashboard = () => {
  useEffect(() => {
    import('mf1Main/MF1Main');
  }, []);

  useEffect(() => {
    import('mf3Cards/MF3Cards');
  }, []);

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>....loading Header</div>}>
        <Header />
      </React.Suspense>
      <div className="dashboard">
        <div className="sidebar">
          <React.Suspense fallback={<div>....loading Header</div>}>
            <Sidebar />
          </React.Suspense>
        </div>
        <div className="content">
          {/* @ts-ignore */}
          <mf1-main></mf1-main>
          {/* @ts-ignore */}
          <mf3-cards></mf3-cards>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
