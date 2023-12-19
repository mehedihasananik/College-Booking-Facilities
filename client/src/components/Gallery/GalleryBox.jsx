import React from "react";

const GalleryBox = ({ image }) => {
  return (
    <div>
      <div>
        <img className="w-full h-[400px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default GalleryBox;
