import React, { useEffect } from 'react';

export function loadPlatform(): Promise<any> {
  return import('mf1Main/MF1Platform');
}

export function loadMF2Payments(): Promise<any> {
  return import('mf2Payments/MF2Payments');
}

const MF2Payments = () => {
  useEffect(() => {
    // TODO: Move in modules.ts?
    loadPlatform().then((platform) => {
      const bootstrap = platform.default;

      loadMF2Payments().then((mf2Payments) => {
        const appModuleClass = mf2Payments.AppModule;
        bootstrap(appModuleClass);
      });
    });
  });

  return (
    <div>
      - платежи
      {/* @ts-ignore */}
      <mf2-payments></mf2-payments>
    </div>
  );
};

export default MF2Payments;
