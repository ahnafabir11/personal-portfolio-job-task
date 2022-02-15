import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';

const ServiceBox = ({ Icon, title, description }) => {
  return (
    <div className="flex-1 border border-[#F3D1BF] rounded space-y-5 px-4 py-6 md:p-8">
      {/* title */}
      <div className="flex gap-4 items-center">
        <div className="bg-[#EF6C57] p-4 rounded-full">
          <Icon width="30" height="30" />
        </div>
        <h4 className="text-[#391400] text-xl font-bold">{title}</h4>
      </div>

      {/* description */}
      <p className="text-[#3914007a] text-sm sm:text-base">{description}</p>

      {/* button */}
      <div className="flex items-center gap-3">
        <button className="bg-white p-3 rounded-full">
          <PlusIcon width="25" height="25" color="#EF6C57"/>
        </button>
        <p className="text-[#391400] text-sm font-medium">Learn More</p>
      </div>
    </div>
  );
};

export default ServiceBox;