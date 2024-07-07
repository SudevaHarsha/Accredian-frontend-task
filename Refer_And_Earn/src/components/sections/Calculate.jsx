import React from "react";
import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* Header Text */}
        <div className="text-center">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Calculate Your Referral Earnings.
          </h2>
          <p
            className="section-subtitle text-lg mb-16 max-w-[622px] mx-auto"
            data-aos="fade-up"
            data-aos-offset="450"
          >
            Find out how much you can earn by referring friends to our courses.
          </p>
        </div>
        {/* Calculation Form */}
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
