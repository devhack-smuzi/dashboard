import React, { useEffect } from 'react';
import 'mf4Navigation/Bundle';

import './styles.css';

const Header = React.lazy(() => import('mf4Navigation/Header'));
const Sidebar = React.lazy(() => import('mf4Navigation/Sidebar'));

export function loadPlatform(): Promise<any> {
  return import('mf1Main/MF1Platform');
}

export function loadMF1Main(): Promise<any> {
  return import('mf1Main/MF1Main');
}

export function loadMF3Cards(): Promise<any> {
  return import('mf3Cards/MF3Cards');
}

const Dashboard = () => {
  loadPlatform().then((platform) => {
    const bootstrap = platform.default;

    loadMF1Main().then((mf1Main) => {
      const appModuleClass = mf1Main.AppModule;
      bootstrap(appModuleClass);
    });

    loadMF3Cards().then((mf3Cards) => {
      const appModuleClass = mf3Cards.AppModule;
      bootstrap(appModuleClass);
    });
  });

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
