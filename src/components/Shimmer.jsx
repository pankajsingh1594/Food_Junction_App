import React from "react";

// Shimmer Component
const Shimmer = () => {
  return (
    <div className="p-5 pt-28 pb-12 flex flex-wrap bg-dark-background">
      {Array(8)
        .fill("")
        .map((arr, index) => {
          return (
            <div
              key={index}
              className=" w-1/4 h-[250px] border-gray-400 border-[10px] max-md:w-full"
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
