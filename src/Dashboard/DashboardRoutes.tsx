import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import MF3Cards from '../components/MF3Cards';
import MF1Main from '../components/MF1Main';
import MF2Payments from '../components/MF2Payments';

const Sidebar = React.lazy(() => import('mf4Navigation/Sidebar'));

const DashboardRoutes = () => {
  const history = useHistory();

  const handleSidebarChange = (value: string) => {
    history.push(`/${value}`);
  };

  return (
    <React.Fragment>
      <div className="sidebar">
        <React.Suspense fallback={<div>....loading Header</div>}>
          <Sidebar onChange={handleSidebarChange} />
        </React.Suspense>
      </div>
      <div className="content">
        <div>
          <Switch>
            <Route path="/cards">
              <MF3Cards />
            </Route>
            <Route path="/credits">
              <MF2Payments />
            </Route>
            <Route path="/home">
              <MF1Main />
            </Route>
            <Route path="/">
              <MF1Main />
            </Route>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardRoutes;
