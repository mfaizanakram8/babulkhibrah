'use client'
import { FiPhone, FiMail } from "react-icons/fi"; // Phone and Mail icons
import { BsClock } from "react-icons/bs"; // Clock icon
import { HiOutlineMenu } from "react-icons/hi"; // Hamburger Menu
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-gray-50">
      {/* Top Section: Logo & Contact Details */}
      <div className="container flex justify-between items-center w-full h-28 mx-auto px-4 md:px-8">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Image src="/c.png" alt="hello" width={200} height={200} />
        </div>

        {/* Right Side: Contact Details */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <FiPhone className="text-orange-500" />
            <span>+971 6 573 5969</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiMail className="text-orange-500" />
            <span>sales@babalkhibrah.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <BsClock className="text-orange-500" />
            <span>Sat - Thurs, 8AM to 6PM</span>
          </div>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
        title="hello"
          className="md:hidden text-orange-500 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Mobile View: Contact Details */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gray-600 text-sm md:hidden py-3">
        {/* First Row */}
        <div className="flex items-center space-x-1">
          <FiPhone className="text-orange-500" />
          <span>+971 6 573 5969</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiMail className="text-orange-500" />
          <span>sales@babalkhibrah.com</span>
        </div>
        {/* Second Row */}
        <div className="flex items-center space-x-1 justify-center w-full">
          <BsClock className="text-orange-500" />
          <span>Sat - Thurs, 8AM to 6PM</span>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <nav className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex justify-between items-center md:justify-center space-x-6 py-3 text-gray-700 font-medium text-sm px-4">
          {/* Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute right-0 bg-white w-full z-10 p-4 md:relative md:flex md:w-auto md:p-0`}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link href="#" className="text-orange-500 hover:text-orange-600">
                Home
              </Link>
              <Link href="#" className="hover:text-orange-500">
                What We Do
              </Link>
              <Link href="#" className="hover:text-orange-500">
                About Us
              </Link>
              <Link href="#" className="hover:text-orange-500">
                Projects
              </Link>
              <Link href="#" className="hover:text-orange-500">
                Investors
              </Link>
              <Link href="#" className="hover:text-orange-500">
                News
              </Link>
              <Link href="#" className="hover:text-orange-500">
                Careers
              </Link>
              <Link href="#" className="hover:text-orange-500">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
