import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'mf4Navigation/Bundle';

import './styles.css';
import MF3Cards from '../components/MF3Cards';
import MF1Main from '../components/MF1Main';

const Header = React.lazy(() => import('mf4Navigation/Header'));
const Sidebar = React.lazy(() => import('mf4Navigation/Sidebar'));

const Dashboard = () => {
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
          <Router>
            <div>
              <Switch>
                <Route path="/cards">
                  <MF3Cards />
                </Route>
                <Route path="/">
                  <MF1Main />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
