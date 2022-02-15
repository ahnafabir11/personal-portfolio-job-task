import React from 'react';

const ProjectBox = ({ bgImage, tagName, title, border }) => {
  return (
    <div className={
      border
        ? "border rounded border-gray-300 p-5 relative"
        : "border-gray-300 relative"
    }>
      <img src={bgImage} alt="" className="w-full" />

      <div className="space-y-4 absolute bottom-14 left-14">
        <p className="py-2 px-4 text-sm text-[#391400] bg-white inline rounded-full">{tagName}</p>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectBox;