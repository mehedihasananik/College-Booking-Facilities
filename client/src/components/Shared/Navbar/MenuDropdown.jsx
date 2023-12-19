import { AiOutlineMenu } from "react-icons/ai";

import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const MenuDropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative z-20  flex   justify-between">
      <div>
        <div className="flex flex-row items-center gap-3 overflow-hidden">
          <div
            onClick={toggleOpen}
            className=" p-4 md:py-1 md:px-2 md:border-[1px] border-neutral-200 flex flex-row items-center gap-3 md:rounded-full cursor-pointer hover:shadow-md transition"
          >
            <div className="hidden md:block">
              <AiOutlineMenu />
            </div>
            <div className=" md:block relative">
              <Avatar />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute rounded-xl md:shadow-md w-32 bg-white overflow-hidden  right-50 md:right-[-50px] top-12 text-sm ">
            <div className="flex flex-col cursor-pointer">
              <Link
                to="/"
                className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Home
              </Link>
              {user ? (
                <div
                  onClick={logOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDropdown;
