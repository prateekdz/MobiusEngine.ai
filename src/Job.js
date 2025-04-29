import React from 'react';
import home from './Component/images/home.png';

function Job() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white relative">
      {/* Centered image */}
      <img
        src={home}
        alt="Home"
        className="max-w-full max-h-full object-contain"
      />

      {/* Button over image (optional: place it below image or floating) */}
      <div className="absolute bottom-10 right-60">
        <button className="px-3 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
          Download our Free E-book
        </button>
      </div>
    </div>
  );
}

export default Job;
