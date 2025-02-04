import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-medium text-green-500">
          Laibyyy
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-8 text-green-500 ml-auto mr-8"> {/* Increased space here */}
          {/* Home page Link */}
          <Link href="/Hero">
            <span className="text-lg font-medium cursor-pointer">Home</span>
          </Link>
          {/* About Link */}
          <Link href="/About">
            <span className="text-lg font-medium cursor-pointer">About</span>
          </Link>
          {/* Contact Link */}
          <Link href="/Contact">
            <span className="text-lg font-medium cursor-pointer">Contact</span>
          </Link>
          {/* Projects Link */}
          <Link href="/Projects">
            <span className="text-lg font-medium cursor-pointer">Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
