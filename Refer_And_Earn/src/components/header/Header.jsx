import React from "react";

//adding up componenents
import Logo from "../../assets/img/logo.png";
import Nav from "../nav/Nav";
import AccountBtns from "../button/AccountBtns";

//import icons
import { CgMenuRight, CgmenuRight } from "react-icons/cg";

const Header = ({ setNavMobile }) => {
  //to open open drawer
  const handleClick = () => {
    setNavMobile(true);
  };

  return (
    <header
      className="py-[30px] lg:pt-[60px] lg:-mt-10 -mt-5"
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-duration="2000"
      data-aos-start=""
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="#/">
          <img src={Logo} alt="logo" />
        </a>
        {/* Nav butttons */}
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        {/* Open nav button */}
        <div onClick={handleClick} className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
