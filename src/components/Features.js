import React from 'react';
import topBannerImage from '../images/top-banner-image.png';
import getStartedImage from '../images/block.png';
import { CheckIcon } from '@heroicons/react/outline';
import { GiftIcon } from '@heroicons/react/outline';

const Features = () => {
  return (
    <section>
      {/* main (top) part */}
      <div className="container flex flex-col md:flex-row md:items-center gap-10 md:gap-20 py-16 lg:py-28">
        <div className="flex-1 space-y-5">
          <h6 className="text-[#EF6D58]">FEATURES</h6>
          <h2 className="section-title-light">Give Your Site <br /> A New Look</h2>
          <p className="text-lg">Service range including technical skills, design, <br /> business understanding.</p>
          <div className="space-y-3">
            <div className="flex items-center gap-5">
              <div className="bg-[#EF6D58] rounded-full p-1">
                <CheckIcon width="20" height="20" color="#fffff" />
              </div>
              <p className="text-gray-400">Range including technical skills</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#EF6D58] rounded-full p-1">
                <CheckIcon width="20" height="20" color="#fffff" />
              </div>
              <p className="text-gray-400">Business understanding</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#EF6D58] rounded-full p-1">
                <CheckIcon width="20" height="20" color="#fffff" />
              </div>
              <p className="text-gray-400">Partner on the long run</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img src={topBannerImage} alt="" />
        </div>
      </div>

      {/* get started part */}
      <div className="bg-[#F9E5DA]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 py-10 relative">
            <div className="space-y-3">  
              <h6 className="text-[#EF6D58]">FEATURES</h6>
              <h2 className="section-title-dark text-3xl">I Help Companies <br /> Move Faster</h2>
              <button className="filled-btn">CONTACT ME</button>
            </div>

            <p className="text-[#3914007a]">Put themselves in the merchant's shoes. It is <br /> meant to partner on the long run.</p>

            <img src={getStartedImage} alt="" />

            <div className="bg-[#EF6D58] rounded-full inline-block p-5 absolute -top-10 left-0">
              <GiftIcon width="40" height="40" color="#fffff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;