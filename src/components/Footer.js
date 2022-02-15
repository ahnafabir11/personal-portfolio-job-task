import React from 'react';
import { GlobeIcon } from '@heroicons/react/outline';

const Footer = ({light}) => {
  return (
    <footer className={light && "bg-[#FDF0E9]"}>
      <div className="container">
        <div className="py-20 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
          <h4 className={`text-2xl font-semibold ${light && "text-[#391400]"}`}>Personal</h4>

          <div className="text-center md:text-left">
            <p className="text-[#EF6D58] mb-5">MENU</p>
            <div className={`${light && "text-[#391400]"}`}>
              <p>About</p>
              <p>Services</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[#EF6D58] mb-5">SERVICE</p>
            <div className={`${light && "text-[#391400]"}`}>
              <p>Design</p>
              <p>Development</p>
              <p>Marketing</p>
              <p>See More</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="bg-[#EF6D58] p-2 rounded-full">
              <GlobeIcon width="30" height="30" color="white" />
            </div>
            <div className="bg-[#EF6D58] p-2 rounded-full">
              <GlobeIcon width="30" height="30" color="white" />
            </div>
            <div className="bg-[#EF6D58] p-2 rounded-full">
              <GlobeIcon width="30" height="30" color="white" />
            </div>
          </div>
        </div>

        <hr className="border-[#3A3C56]" />

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 py-10">
          <div className={`flex flex-col md:flex-row items-center gap-1 ${light && "text-[#391400]"}`}>
            <p>Copyright &copy; Personal.</p>
            <p>All Rights Reserved.</p>
          </div>

          <div className={`flex gap-10 ${light && "text-[#391400]"}`}>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;