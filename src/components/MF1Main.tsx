import React, { useEffect, useState } from 'react';
import MF6Statistics from './MF6Statistics';

import './MF1Main.css';

export function loadPlatform(): Promise<any> {
  return import('mf1Main/MF1Platform');
}

export function loadMF1Main(): Promise<any> {
  return import('mf1Main/MF1Main');
}

const MF1Main = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // TODO: Move in modules.ts?
    loadPlatform().then((platform) => {
      const bootstrap = platform.default;

      loadMF1Main().then((mf1Main) => {
        const appModuleClass = mf1Main.AppModule;
        bootstrap(appModuleClass);
      });
    });
  }, []);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div>
      <div className="statistics">
        <span className="statistics-toggle" onClick={handleToggle}>
          Показать статистику
        </span>
      </div>
      {toggle && <MF6Statistics />}
      {/* @ts-ignore */}
      <mf1-main></mf1-main>
    </div>
  );
};

export default MF1Main;
