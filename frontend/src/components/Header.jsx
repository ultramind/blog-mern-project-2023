import React, { useState } from "react";
import { images } from "../constant";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

const NavItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  // dropdown
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown((currentState) => {
      return !currentState;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 ">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center ">
          <button
            className="flex items-center px-4 py-2"
            onClick={toggleDropdown}
          >
            <span>{item.name}</span>
            <MdArrowDropDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 transform-full lg:translate-y-full lg:group-hover:block  w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                <a
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navIsVisibilityHandler = () => {
    setNavIsVisible((currentState) => {
      return !currentState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between items-center py-4">
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              onClick={navIsVisibilityHandler}
              className="w-6 h-6"
            />
          ) : (
            <AiOutlineMenu
              onClick={navIsVisibilityHandler}
              className="w-6 h-6"
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0 " : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-49 flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex flex-col items-center gap-y-6 text-white lg:text-dark-soft lg:flex-row gap-x-2 font-semibold">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-3 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
