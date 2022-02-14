import React from 'react';
import topBannerImage from '../images/top-banner-image.png';

const TopBanner = () => {
  return (
    <section className="my-8 md:my-36 flex flex-col-reverse md:flex-row md:items-center gap-10">
      {/* text part */}
      <div className="flex-1 space-y-5">
        <h6 className="text-[#EF6D58]">GABRIEL PIRES</h6>
        <h1 className="text-6xl lg:text-8xl font-bold">The Simple, <br /> Clen Design</h1>
        <p className="text-sm text-gray-300">Agency provides a full service range including technical <br /> skills, design, business, understanding</p>
        <button className="filled-btn">see my work</button>
      </div>

      {/* image part */}
      <div className="flex-1">
        <img src={topBannerImage} alt="" className="ml-auto" />
      </div>
    </section>
  );
};

export default TopBanner;