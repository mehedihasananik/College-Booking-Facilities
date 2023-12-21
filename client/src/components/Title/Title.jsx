import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex justify-center text-4xl pb-2 md:pt-5 relative">
      <p className="inline-block relative">
        {title}
        <span className="absolute bottom-[-5px] left-0 right-0 h-1 gradient-container"></span>
      </p>
    </div>
  );
};

export default Title;
