import { Rating } from '@mui/material';
import React from 'react';

const ReviewBox = ({ name, occupation, review, profileImage, rating, bgWhite }) => {
  return (
    <div className={
      bgWhite
        ? "flex-1 border border-[#F3D1BF] p-8 space-y-20 bg-white"
        : "flex-1 border border-[#F3D1BF] p-8 space-y-20"
    }>
      {/* rating & review */}
      <div className="space-y-5">
        <Rating name="read-only" value={rating} readOnly />
        <p className="text-[#391400] font-medium">{review}</p>
      </div>

      {/* client details */}
      <div className="flex items-center gap-5">
        <img src={profileImage} alt="" />
        <div>
          <h4 className="text-2xl font-semibold text-[#391400]">{name}</h4>
          <p className="text-[#391400] font-medium">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;