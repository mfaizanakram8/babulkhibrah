import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-50 py-8 text-center">
      {/* Logo */}
      <div className="mb-4 flex items-center justify-center">
        <Image src="/c.png" alt="logo" width={250} height={250} />
      </div>

      {/* Navigation Links */}
      <div className="mb-6 text-sm flex flex-wrap justify-center space-x-4">
        <Link href="#" className="hover:underline">
          Home
        </Link>
        <span className="hidden md:inline">|</span>
        <Link href="#" className="hover:underline">
          About
        </Link>
        <span className="hidden md:inline">|</span>
        <Link href="#" className="hover:underline">
          Features
        </Link>
        <span className="hidden md:inline">|</span>
        <Link href="#" className="hover:underline">
          Portfolio
        </Link>
        <span className="hidden md:inline">|</span>
        <Link href="#" className="hover:underline">
          FAQs
        </Link>
        <span className="hidden md:inline">|</span>
        <Link href="#" className="hover:underline">
          Contact
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center flex-wrap gap-4">
        <Link href="#">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/50/facebook-new.png"
            alt="facebook-new"
          />
        </Link>
        <Link href="#">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="google-logo"
          />
        </Link>
        <Link href="#">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/50/pinterest--v1.png"
            alt="pinterest--v1"
          />
        </Link>
        <Link href="#">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/50/twitter.png"
            alt="twitter"
          />
        </Link>
        <Link href="#">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/50/linkedin.png"
            alt="linkedin"
          />
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-xs">
        <p>Copyright © 2023 All Rights Reserved by Babalkhibrah Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
