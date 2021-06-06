import React, { useEffect } from 'react';

export function loadPlatform(): Promise<any> {
  return import('mf1Main/MF1Platform');
}

export function loadMF3Cards(): Promise<any> {
  return import('mf3Cards/MF3Cards');
}

const MF3Cards = () => {
  useEffect(() => {
    // TODO: Move in modules.ts?
    loadPlatform().then((platform) => {
      const bootstrap = platform.default;

      loadMF3Cards().then((mf3Cards) => {
        const appModuleClass = mf3Cards.AppModule;
        bootstrap(appModuleClass);
      });
    });
  }, []);

  return (
    <div>
      - карты
      {/* @ts-ignore */}
      <mf3-cards></mf3-cards>
    </div>
  );
};

export default MF3Cards;
