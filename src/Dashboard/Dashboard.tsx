import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'mf4Navigation/Bundle';
import './styles.css';

import DashboardRoutes from './DashboardRoutes';

const Header = React.lazy(() => import('mf4Navigation/Header'));

const LegalPayments = React.lazy(() => import('mf5LegalPayments/MF5LegalPayments'));

const Dashboard = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>....loading Header</div>}>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={<div>....loading LegalPayments</div>}>
        <LegalPayments />
      </React.Suspense>
      <div className="dashboard">
        <Router>
          <DashboardRoutes />
        </Router>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
