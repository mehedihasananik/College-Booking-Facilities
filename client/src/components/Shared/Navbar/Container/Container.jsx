import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[2520px] px-5 mx-auto md:px-20 lg:px-44 ">
      {children}
    </div>
  );
};

export default Container;
