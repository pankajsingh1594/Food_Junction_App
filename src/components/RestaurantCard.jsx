import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant.jsx";

// Restaurant Card Component
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  costForTwo,
  locality,
  avgRating,
}) => {
  return (
    <div className="p-2 shadow-2xl m-1 max-md:p-0 max-md:mb-5">
      <img
        src={IMAGE_CDN_URL + cloudinaryImageId}
        className="w-full h-[250px] object-cover max-lg:h-[200px] max-md:h-[250px]"
      />
      <p className="text-xl font-bold mt-2 text-secondary line-clamp-1">
        {name}
      </p>
      <p className="text-white">{locality}</p>
      <div className="flex justify-between">
        <p className="text-white">{costForTwo}</p>

        <div className="flex justify-end">
          <p className="text-white">{avgRating} </p>
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
