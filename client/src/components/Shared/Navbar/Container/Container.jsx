import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto px-4 md:px-20 lg:px-44 ">
      {children}
    </div>
  );
};

export default Container;
