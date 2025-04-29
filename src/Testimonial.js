import React from 'react';

function Testimonials() {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">What our clients have to say</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Holly is a senior executive who got over 10 job interviews and an offer she accepted<br />
        Joshua is a senior software engineer who has accepted an offer
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Holly's video */}
        <div className="w-full lg:w-[640px] h-[400px]">
          <div className="w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/2q30UklnQl0"
              title="Customer Testimonial - Holly"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Joshua's video */}
        <div className="w-full lg:w-[640px] h-[400px]">
          <div className="w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/e3Vyi-wnorM"
              title="Joshua's experience with Mobius"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <p className="mt-10 text-gray-700">
        More customer testimonials at our{' '}
        <a href="https://www.linkedin.com/company/mobiusengine" className="text-blue-600 underline">
          Linkedin page
        </a>
      </p>
    </div>
  );
}

export default Testimonials;
