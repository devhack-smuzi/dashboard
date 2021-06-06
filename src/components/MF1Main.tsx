import React, { useEffect } from 'react';

export function loadPlatform(): Promise<any> {
  return import('mf1Main/MF1Platform');
}

export function loadMF1Main(): Promise<any> {
  return import('mf1Main/MF1Main');
}

const MF1Main = () => {
  useEffect(() => {
    // TODO: Move in modules.ts?
    loadPlatform().then((platform) => {
      const bootstrap = platform.default;

      loadMF1Main().then((mf1Main) => {
        const appModuleClass = mf1Main.AppModule;
        bootstrap(appModuleClass);
      });
    });
  });

  return (
    <div>
      Main page
      {/* @ts-ignore */}
      <mf1-main></mf1-main>
    </div>
  );
};

export default MF1Main;
