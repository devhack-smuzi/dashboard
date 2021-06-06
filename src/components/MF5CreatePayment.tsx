import React from 'react';

const CreatePayment = React.lazy(
  () => import('mf5CreatePayment/MF5CreatePayment')
);

const MF5CreatePayment = () => {
  return (
    <React.Suspense fallback={<div>....loading CreatePayment</div>}>
      <CreatePayment />
    </React.Suspense>
  );
};

export default MF5CreatePayment;
