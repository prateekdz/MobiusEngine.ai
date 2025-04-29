import React from 'react';
import Why from './Component/images/why.png';

function why() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white relative">
      <img
        src={Why}
        alt="Home"
        className="max-w-full max-h-full object-contain"
      />

      </div>
  );
}

export default why;
