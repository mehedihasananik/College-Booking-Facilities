import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";
import Container from "./Container/Container";

const Navbar = () => {
  return (
    <Container>
      {/* logo & links */}
      <div className="py-3 flex items-center justify-between ">
        {/* logo */}
        <Logo />
        {/* links */}
        <Search />
        {/* dropdown */}
        <MenuDropdown />
      </div>
    </Container>
  );
};

export default Navbar;
