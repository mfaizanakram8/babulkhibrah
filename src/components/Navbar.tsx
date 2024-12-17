'use client';
import { FiPhone, FiMail, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi"; // Phone, Mail, Social Icons
import { BsClock } from "react-icons/bs"; // Clock icon
import { HiOutlineMenu } from "react-icons/hi"; // Hamburger Menu
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-300 bg-gray-50">
      {/* Top Bar: Social Icons on Left, Quick Links on Right */}
      <div className="w-full bg-gray-100 text-gray-600 text-xs py-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Left Side: Social Media Icons */}
          <div className="flex space-x-4 items-center">
            <Link href="#" className="hover:text-orange-500"><FiFacebook /></Link>
            <Link href="#" className="hover:text-orange-500"><FiTwitter /></Link>
            <Link href="#" className="hover:text-orange-500"><FiLinkedin /></Link>
            <Link href="#" className="hover:text-orange-500"><FiInstagram /></Link>
          </div>

          {/* Right Side: Quick Links */}
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-orange-500">Locations</Link>
            <Link href="#" className="hover:text-orange-500">FAQs</Link>
            <Link href="#" className="hover:text-orange-500">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Section: Logo & Contact Details */}
      <div className="container flex justify-between items-center w-full h-24 mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/c.png" alt="Logo" width={200} height={200} />
        </div>

        {/* Contact Details */}
        <div className="hidden md:flex items-center justify-between space-x-6 text-gray-600 text-sm">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-orange-500" />
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase text-xs">CALL US</span>
              <span className="text-orange-500 font-semibold">+971 6 573 5969</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-orange-500" />
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase text-xs">EMAIL US</span>
              <span className="text-orange-500 font-semibold">sales@babalkhibrah.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BsClock className="text-orange-500" />
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase text-xs">WE ARE OPEN</span>
              <span className="text-orange-500 font-semibold">Sat - Thurs, 8AM to 6PM</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          title="Menu"
          className="md:hidden text-orange-500 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Mobile View: Contact Details */}
      <div className={`flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gray-600 text-sm md:hidden py-3`}>
        <div className="flex items-center space-x-1">
          <FiPhone className="text-orange-500" />
          <span>+971 6 573 5969</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiMail className="text-orange-500" />
          <span>sales@babalkhibrah.com</span>
        </div>
        <div className="flex items-center space-x-1 justify-center w-full">
          <BsClock className="text-orange-500" />
          <span>Sat - Thurs, 8AM to 6PM</span>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <nav className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex justify-between items-center md:justify-center space-x-6 py-3 text-gray-700 font-medium text-sm px-4">
          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute right-0 bg-white w-full z-10 p-4 md:relative md:flex md:w-auto md:p-0`}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link href="#" className="text-orange-500 hover:text-orange-600">Home</Link>
              <Link href="#" className="hover:text-orange-500">What We Do</Link>
              <Link href="#" className="hover:text-orange-500">About Us</Link>
              <Link href="#" className="hover:text-orange-500">Projects</Link>
              <Link href="#" className="hover:text-orange-500">Investors</Link>
              <Link href="#" className="hover:text-orange-500">News</Link>
              <Link href="#" className="hover:text-orange-500">Careers</Link>
              <Link href="#" className="hover:text-orange-500">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
