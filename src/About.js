import React from 'react';
import CEO from './Component/images/1.png';
import COO from './Component/images/2.png';

function About() {
  return (
    <div className="w-screen h-screen overflow-auto bg-[#f6f6f6] px-10 py-8">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      {/* CEO Section */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <img src={CEO} alt="CEO" className="w-1/3 max-w-xs object-contain" />
        <div className="flex-1">
          <p className="mb-4">
            Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
          </p>
          <p className="mb-4">
            Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Ashwin Linkedin <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
        </div>
      </div>

      {/* COO Section */}
      <div className=" flex flex-col md:flex-row items-start gap-10">
        <img src={COO} alt="COO" className="w-1/3 max-w-xs object-contain" />
        <div className="flex-1">
          <p className="mb-4">
            Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.
          </p>
          <p className="mb-4">
            With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Nicole Linkedin <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
        </div>
      </div>
          <a href="#" className="text-blue-600 font-medium hover:underline">
          Learn more about our Board of Advisors​ <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
          <br></br>
          <a href="#" className="text-blue-600 font-medium hover:underline">
          Follow us on our Linkedin page <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
    </div>
  );
}

export default About;
