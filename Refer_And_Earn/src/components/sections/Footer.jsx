import React from "react";
import Logo from "../../assets/img/logo.png";
import VisaImg from "../../assets/img/visa.png";
import MastercardImg from "../../assets/img/mastercard.png";
import BitcoinImg from "../../assets/img/bitcoin.png";

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoMdAdd,
  IoIosAdd
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* logo and description */}
          <div className="flex-1">
            <a href="#/">
              <img
                src={Logo}
                alt="Company Logo"
                draggable="false"
                className="border rounded-2xl shadow-xl mb-6 p-3"
              />
            </a>
            <p className="max-w-xs">
              We offer a wide range of courses designed to help you achieve your
              goals. Join us and start learning today!
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Courses
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Programs
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Resources Links */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Download Course Catalog
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Student Resources
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500 transition" href="#/">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Payment methods */}
          <div className="flex-1">
            <div className="mb-5">
              <h4 className="text-xl font-semibold mb-4">
                Accepted Payment Methods
              </h4>
              <ul className="space-y-2">
                <li>
                  <p className="hover:text-blue-500 transition flex items-center justify-between w-[70%]" href="#/">
                    UG Courses <IoIosAdd className="text-lg" />
                  </p>
                  <p className="hover:text-blue-500 transition mt-2 flex items-center justify-between w-[70%]" href="#/">
                    PG Courses <IoIosAdd className="text-lg" />
                  </p>
                  <p className="hover:text-blue-500 transition mt-2 flex items-center justify-between w-[70%]" href="#/">
                    Proagramming <IoIosAdd className="text-lg" />
                  </p>
                  <p className="hover:text-blue-500 transition mt-2 flex items-center justify-between w-[70%]" href="#/">
                    BitCoin <IoIosAdd className="text-lg" />
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <img src={VisaImg} alt="Visa" className="w-12" />
              <img src={MastercardImg} alt="Mastercard" className="w-12" />
              <img src={BitcoinImg} alt="Bitcoin" className="w-12" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
          <p className="text-gray-500">&copy; 2023 Your Company. All rights reserved.</p>
          <div className="flex space-x-6 text-2xl mt-4 lg:mt-0">
            <a className="hover:text-blue-500 transition" href="#/">
              <IoLogoYoutube />
            </a>
            <a className="hover:text-blue-500 transition" href="#/">
              <IoLogoInstagram />
            </a>
            <a className="hover:text-blue-500 transition" href="#/">
              <IoLogoTwitter />
            </a>
            <a className="hover:text-blue-500 transition" href="#/">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
