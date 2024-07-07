import React, { useState } from "react";

const CalcForm = () => {
  const [referralCount, setReferralCount] = useState("");
  const [selectedOption, setSelectedOption] = useState("Courses");
  const [estimatedEarnings, setEstimatedEarnings] = useState(5000);

  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Validate referralCount is a number
    const count = parseInt(referralCount);
    if (isNaN(count) || count <= 0) {
      setEstimatedEarnings(0);
      return;
    }
    
    // Generate random value for options (just for demonstration)
    let optionValue = 0;
    switch (selectedOption) {
      case "Courses":
        optionValue = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
        break;
      case "Programs":
        optionValue = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
        break;
      case "Workshops":
        optionValue = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        break;
      case "Webinars":
        optionValue = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
        break;
      default:
        optionValue = 0;
        break;
    }
    
    // Calculate estimated earnings
    const earnings = count * optionValue;
    setEstimatedEarnings(earnings);
  };

  return (
    <div
      className="w-full bg-slate-100 max-w-[942px] mx-auto rounded-2xl text-gray-600 p-12 shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      <form
        className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center"
        onSubmit={handleCalculate}
      >
        <input
          className="input placeholder:text-gray-600"
          type="text"
          placeholder="Enter your referral count"
          value={referralCount}
          onChange={(e) => setReferralCount(e.target.value)}
        />
        <select
          className="select px-2"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Courses">Courses</option>
          <option value="Programs">Programs</option>
          <option value="Workshops">Workshops</option>
          <option value="Webinars">Webinars</option>
        </select>
        {/* btn */}
        <button className="btn text-white px-8 flex self-start" type="submit">
          Calculate Earnings
        </button>
      </form>
      {/* text */}
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">ESTIMATED EARNINGS:</div>
        <div className="text-[32px] font-bold mb-3">
          ${estimatedEarnings}{" "}
          <span className="text-blue">(Approx)</span>
        </div>
        <div className="text-gray-500 tracking-[1%]">
          Earnings are estimated based on referrals and course pricing.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
