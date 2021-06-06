import React from 'react';
import MF6Statistics from './MF6Statistics';

const CreatePayment = React.lazy(
  () => import('mf5CreatePayment/MF5CreatePayment')
);

const MF5CreatePayment = () => {
  return (
    <React.Fragment>
      <MF6Statistics />
      <React.Suspense fallback={<div>....loading CreatePayment</div>}>
        <CreatePayment />
      </React.Suspense>
    </React.Fragment>
  );
};

export default MF5CreatePayment;
