import React from 'react';

function PricingPage() {
  return (
    <div className="bg-[#f6f6f6] py-20 px-4 text-center min-h-screen">
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Job Application Service Plans</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
          {/* Plan 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs min-h-[420px]">
            <h3 className="text-xl font-bold mb-2">April Promo</h3>
            <p className="text-blue-600 font-semibold mb-4">$35/wk</p>
            <ul className="text-left text-sm list-disc list-inside space-y-2 mb-6">
              <li>Search and Curation across 1m+ jobs, every 48 hours</li>
              <li>Up to 20 approved job apps/week -  human based, no bots, company websites only</li>
              <li>Additional apps at $1.5/application</li>
              <li>Dedicated application analyst</li>
              <li> Up to 10 search criteria & 5 job titles included</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up now</button>
          </div>

          {/* Plan 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs min-h-[420px]">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-blue-600 font-semibold mb-4">$50/wk</p>
            <ul className="text-left text-sm list-disc list-inside space-y-2 mb-6">
              <li>Everything in Promo plan</li>
              <li>Resume review and feedback report - format and storytelling</li>
              <li>Dedicated search specialist</li>
              <li>Up to 50 applications/week</li>
              <li>Additional apps $1.5/application</li>
              <li>Analyst support with 6 hour SLA / PST hours</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up now</button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs min-h-[420px]">
            <h3 className="text-xl font-bold mb-2">Plus</h3>
            <p className="text-blue-600 font-semibold mb-4">$100/wk</p>
            <ul className="text-left text-sm list-disc list-inside space-y-2 mb-6">
              <li>Everything in Starter</li>
              <li>Up to 15 job apps/week</li>
              <li>Slack + dashboard</li>
              <li>1:1 call available</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up now</button>
          </div>

          {/* Plan 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs min-h-[420px]">
            <h3 className="text-xl font-bold mb-2">Advanced</h3>
            <p className="text-blue-600 font-semibold mb-4">$150/wk</p>
            <ul className="text-left text-sm list-disc list-inside space-y-2 mb-6">
              <li>Custom Resumes & CL's</li>
              <li>Support for complex search criteria</li>
              <li>Up to 20 customized applications/week</li>
              <li>Senior advanced application team w/ resume specialist</li>
              <li>Access to Founder, CEO and Executive coaches</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up now</button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Resume Building & Coaching</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
          {/* Resume Rebuild */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm min-h-[500px]">
            <h3 className="text-xl font-bold mb-2">Resume Rebuild</h3>
            <p className="text-blue-600 font-semibold mb-4">$1000</p>
            <p className="text-blue-600 font-semibold mb-4">one-time</p>
            <ul className="text-left text-sm list-disc list-inside space-y-2 mb-6">
              <li>Rebuild your resume to position you in the strongest possible way toward a seniority, specific company, industry, or function</li>
              <li>Coaching sessions - 3x / 30 minutes</li>
              <li>Best for Senior to VP level positioning</li>
              <li>Focus is on storytelling rather than moving words and format around</li>
              <li>Work directly with our co-founder who has 20+ years of leadership experience at Google and JP Morgan</li>
              <li>Work with our Executive coach (UC Berkeley, 10+ years of executive experience)</li>
              <li>Resume Rebuild portfolio available upon request</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up now</button>
          </div>

          {/* Interview Prep */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm min-h-[500px]">
            <h3 className="text-xl font-bold mb-2">Interview Prep</h3>
            <p className="text-blue-600 font-semibold mb-4">$500</p>
            <p className="text-blue-600 font-semibold mb-4">one-time</p>
            <ul className="text-left text-sm list-disc list-inside space-y-2 mb-6">
              <li>Two 45-minute sessions with our co-founder, who has hired/coached 100's at Google, JP Morgan, and Reuters​​​​</li>
              <li>Targeted and real-time interview feedback</li>
              <li>Focus on clarity, confidence, empathy, communicating value</li>
              <li>Senior to executive roles, both technical and non technical</li>
              <li>Materials for improvement</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
