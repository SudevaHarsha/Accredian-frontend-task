import React, { useState } from "react";
import Image from "../../assets/img/Hero_Coins.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ReferralForm from "../sections/ReferralForm";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        {/* Hero text */}
        <div className="flex-1 text-center lg:text-left">
          {/* badge */}
          <div
            className="bg-slate-200 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px] mx-auto lg:mx-0"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-between text-sm lg:text-base">
              <div className="bg-white text-darkblue rounded-full p-1 px-4 font-medium">
                Earn $25
              </div>
              <div>for every friend you refer</div>
            </div>
          </div>
          {/* title */}
          <h1
            className="text-[32px] lg:text-[64px] leading-tight mb-6 "
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Refer & Earn with Us!
          </h1>
          <p
            className="max-w-[440px] leading-relaxed mb-8"
            data-aos="fade-down"
            data-aos-delay="600"
          >            Invite your friends to join our platform and earn rewards when they make their first purchase. It's that simple!
          </p>

          <button
            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full text-white text-sm lg:h-16 lg:text-base font-bold gap-x-6 transition-all duration-300 ease-in-out hover:bg-gradient-move"
            onClick={openModal}
            style={{
              backgroundImage: 'linear-gradient(to right, #2563EB, #FF6584)',
            }}
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <span className="z-10 relative flex items-center justify-between gap-2">
              Refer Now
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </span>
            {/* Animated overlay for gradient */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"></span>
          </button>

        </div>
        {/* Hero image */}
        <div className="flex-1 w-auto">
          <img src={Image} alt="Refer & Earn" className="w-full h-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>

      {/* Popup Modal */}
      <ReferralForm showModal={showModal} closeModal={closeModal} />
    </section>
  );
};

export default Hero;
