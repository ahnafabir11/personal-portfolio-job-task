import React from 'react';

const ExperienceBox = ({ Icon, number, title }) => {
  return (
    <div className="flex-1 border border-[#F3D1BF] rounded space-y-5 px-4 py-6 md:p-8">
      <div className="flex gap-8 items-center">
        <div className="bg-[#EF6C57] p-5 rounded-full">
          <Icon width="40" height="40" />
        </div>
        <div className="space-y-3">
          <h1 className="text-[#391400] text-4xl font-bold">{number}</h1>
          <p className="text-[#391400] font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBox;