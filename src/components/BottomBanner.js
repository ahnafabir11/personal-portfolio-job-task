import React from 'react';
import topBannerImage from '../images/top-banner-image.png';
import bottomImg1 from '../images/bottom1.png';
import bottomImg2 from '../images/bottom2.png';
import bottomImg3 from '../images/bottom3.png';
import bottomImg4 from '../images/bottom4.png';
import bottomImg5 from '../images/bottom5.png';
import bottomImg6 from '../images/bottom6.png';

const BottomBanner = () => {
  return (
    <section className="bg-[#FDF0E9]">
      <div className="container flex flex-col-reverse md:flex-row md:items-center gap-10 py-20">
        {/* text part */}
        <div className="flex-1 space-y-5">
          <h6 className="text-[#EF6D58]">GABRIEL PIRES</h6>
          <h1 className="section-title-dark">Help To Build <br /> Your Dream <br /> Project</h1>
          <p className="text-[#39140075]">Agency provides a full service range including technical <br /> skills, design, business, understanding</p>
          <button className="filled-btn">contact me</button>
        </div>

        {/* image part */}
        <div className="flex-1">
          <img src={topBannerImage} alt="" className="ml-auto" />
        </div>
      </div>

      {/* bottom image */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <img src={bottomImg1} alt="" className="w-full" />
        <img src={bottomImg2} alt="" className="w-full" />
        <img src={bottomImg3} alt="" className="w-full" />
        <img src={bottomImg4} alt="" className="w-full" />
        <img src={bottomImg5} alt="" className="w-full" />
        <img src={bottomImg6} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default BottomBanner;