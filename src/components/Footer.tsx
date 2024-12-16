import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-50 py-8 text-center">
      {/* Logo */}
      <div className="mb-4 items-center justify-center text-center flex">
        <Image src="/c.png" alt="logo" width={250} height={250} />
      </div>

      {/* Navigation Links */}
      <div className="mb-6 space-x-4 text-sm">
        <Link href="#">Home</Link>
        <span>|</span>
        <Link href="#">About</Link>
        <span>|</span>
        <Link href="#">Features</Link>
        <span>|</span>
        <Link href="#">Portfolio</Link>
        <span>|</span>
        <Link href="#">FAQs</Link>
        <span>|</span>
        <Link href="#">Contact</Link>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4">
        <Link href="#">
          <Image
            src="https://img.icons8.com/color/50/facebook-new.png"
            alt="Facebook"
            width={50}
            height={50}
          />
        </Link>
        <Link href="#">
          <Image
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="Google"
            width={48}
            height={48}
          />
        </Link>
        <Link href="#">
          <Image
            src="https://img.icons8.com/color/50/pinterest--v1.png"
            alt="Pinterest"
            width={50}
            height={50}
          />
        </Link>
        <Link href="#">
          <Image
            src="https://img.icons8.com/color/50/twitter.png"
            alt="Twitter"
            width={50}
            height={50}
          />
        </Link>
        <Link href="#">
          <Image
            src="https://img.icons8.com/color/50/linkedin.png"
            alt="LinkedIn"
            width={50}
            height={50}
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
