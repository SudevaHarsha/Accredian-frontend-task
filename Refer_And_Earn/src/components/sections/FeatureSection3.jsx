import React from "react";
// Import image related to features (assuming unchanged import path)
import Image3 from "../../assets/img/feature-3-img.png";

const FeatureSection3 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row">
        {/* Text */}
        <div>
          <h3 className="h3 mb-6">
            Enhance Your Investment Strategies
          </h3>
          <p className="text-slate-700 mb-10 max-w-[408px]">
            Utilize advanced analytical tools and clear TradingView charts to enhance your investment strategies in cryptocurrencies.
          </p>
          <button className="btn px-8 mb-5 mx-auto lg:mx-0">Learn More</button>
        </div>
        {/* Image */}
        <div
          className="flex-1 flex justify-end"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <img src={Image3} alt="layouts" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection3;
