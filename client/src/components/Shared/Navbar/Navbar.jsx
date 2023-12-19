import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";
import Container from "./Container/Container";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  return (
    <Container>
      {/* logo & links */}
      <div className="hidden py-3 md:flex items-center justify-between ">
        {/* logo */}
        <Logo />
        {/* links */}
        <Search />
        {/* dropdown */}
        <MenuDropdown />
      </div>
      <div className="block md:hidden">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <MenuDropdown />
          </div>
          <div className="navbar-end">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-5 font-bold h-44 pt-3 relative right-[-30px] text-center"
              >
                <div className="tex-center hover:bg-gray-200">
                  <Link to="/">Home</Link>
                </div>
                <div className="tex-center hover:bg-gray-200">
                  <Link to="colleges">Colleges</Link>
                </div>
                <div className="tex-center hover:bg-gray-200">
                  <Link>Admission</Link>
                </div>
                <div className="tex-center hover:bg-gray-200">
                  <Link>My College</Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
