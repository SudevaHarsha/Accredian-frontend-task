import React from "react";
import Image from "../../assets/img/Referral.png";
/* import Image from "../../assets/img/why-img.png";
 */
const Why = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-x-8">
          {/* image */}
          <div
            className="order-2 lg:order-1 flex-1 h-full"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={Image} alt="refer and earn" className="w-full max-w-full h-[580px]" />
          </div>
          {/* text */}
          <div
            className="order-1 lg:order-2 max-w-[480px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="section-title">
              Why You Should Refer and Earn with Us
            </h2>
            <p className="section-subtitle">
              Discover the benefits of our referral program. Earn rewards by
              referring friends and family to our comprehensive courses. No
              hidden fees, transparent rewards, and real success stories.
            </p>
            {/* Benefits List */}
            <ul className="mt-4 grid grid-cols-1 gap-2 text-gray-700">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Increased earnings potential
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Exclusive rewards and bonuses
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Access to premium resources
              </li>
              {/* Add more benefits as needed */}
            </ul>
            {/* Button (if needed) */}
            <button className="btn px-6 mt-3">Learn more</button> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
