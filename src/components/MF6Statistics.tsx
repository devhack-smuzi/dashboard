import React, { useEffect } from 'react';

// TODO: move and use as single instance
export function loadPlatform(): Promise<any> {
  return import('mf1Main/MF1Platform');
}

export function loadMF6Statistics(): Promise<any> {
  return import('mf6Statistics/MF6Statistics');
}

const MF6Statistics = () => {
  // TODO: do not forget about loading state
  useEffect(() => {
    // TODO: Move in modules.ts?
    loadPlatform().then((platform) => {
      const bootstrap = platform.default;

      loadMF6Statistics().then((mf6Statistics) => {
        const appModuleClass = mf6Statistics.AppModule;
        bootstrap(appModuleClass);
      });
    });
  }, []);

  return (
    <div>
      {/* @ts-ignore */}
      <mf6-statistics></mf6-statistics>
    </div>
  );
};

export default MF6Statistics;
