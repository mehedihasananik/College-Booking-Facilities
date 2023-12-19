import React from "react";
import logo from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="hidden md:block">
      <img className="w-14 h-14" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
