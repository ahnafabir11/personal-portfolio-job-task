import React from 'react';
import topBannerImage from '../images/top-banner-image.png';

const PortBtmBanner = () => {
  return (
    <section className="bg-[#FDF0E9] py-20">
      <div className="container">
        <div className="bg-[#EF6D58] p-20 rounded">
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-10">
            {/* text part */}
            <div className="flex-1 space-y-5">
              <h1 className="section-title-light">Help To Build <br /> Your Dream <br /> Project</h1>
              <p className="text-gray-300">Agency provides a full service range including technical <br /> skills, design, business, understanding</p>
              <button className="filled-btn bg-white text-[#391400]">contact me</button>
            </div>

            {/* image part */}
            <div className="flex-1">
              <img src={topBannerImage} alt="" className="ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortBtmBanner;