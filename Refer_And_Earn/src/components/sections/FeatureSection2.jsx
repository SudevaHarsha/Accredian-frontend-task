import React from "react";
// Import image related to features (assuming unchanged import path)
import Image2 from "../../assets/img/feature-2-img.png";

const FeatureSection2 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-end items-center lg:flex-row">
          {/* Image */}
          <div
            className="flex-1 lg:absolute lg:left-0 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={Image2} alt="image2" draggable="false" className="max-h-[620px] max-w-full" />
          </div>
          {/* Text */}
          <div
            className="flex-1 max-w-[500px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h3 className="h3 mb-6">Real-Time Insights</h3>
            <p className="text-slate-700 mb-8">
              Access real-time data and insights on changing tech and placement opportunities from anywhere.
            </p>
            <button className="btn px-8 mb-6 lg:mb-0 mx-auto lg:mx-0">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
