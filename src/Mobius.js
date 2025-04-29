import React from 'react';

function Mobius() {
  return (
    <div className="bg-[#f6f6f6] py-12 px-4 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-2">
        Mobius Advanced – Custom Resume for Every Job
      </h2>

      <p className="text-gray-600 mb-1">
        We use our own proprietary AI model to customize each job application
      </p>
      <p className="text-sm italic text-gray-500 mb-8">
        *currently only available to our advanced customers
      </p>

      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-6xl aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/IGcxoasEfs8"
            title="Mobius - Resume Customization"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Mobius;
