import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container relative">
      <div className="flex items-center justify-between py-3">
        {/* logo */}
        <Link to="/" className="text-3xl">Portfolio</Link>

        {/* nav links */}
        <div className="hidden md:block flex-1">
          <div className="max-w-[60%] mx-auto flex justify-around">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/">Services</Link>
            <Link to="/">Blogs</Link>
          </div>
        </div>

        {/* button */}
        <button className="hidden md:block transparent-btn">
          content
        </button>

        {/* mobile menu icon */}
        <div
          className="border rounded p-2 cursor-pointer hover:bg-[#EF6D58] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen
              ? <XIcon width="20" height="20" />
              : <MenuIcon width="20" height="20" />
          }
        </div>
      </div>
      
      {/* mobile menu */}
      {
        isMenuOpen &&
        <div
            className="absolute w-6/12 right-4 top-14 rounded bg-[#525363] text-orange-600 text-right flex flex-col px-2 py-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/">Services</Link>
          <Link to="/">Blogs</Link>
        </div>
      }
    </div>
  );
};

export default NavigationBar;