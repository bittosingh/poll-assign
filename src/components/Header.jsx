import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/footer/menu.svg";
import HamburgerMenu from "./HamburgerMenu";  //  HamburgerMenu component

function Header() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English (UK)");

  const languages = [
    "Dansk",
    "Deutsch",
    "English",
    "English (UK)",
    "Español",
    "Español (España)",
    "Ελληνικά",
    "Français",
  ];

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="flex justify-between items-center bg-[#f7f8fa] text-white py-7 px-6 sm:px-12 lg:px-20">
      <div className="text-2xl font-semibold">
        <Link to="/">
          <img
            src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/assets/images/global/zoosk-heart-logo.svg"
            alt="Zoosk Logo"
            className="w-auto h-[33px]"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to={isSignUp ? "/" : "/signup"}
          className="text-base sm:text-lg lg:text-xl text-[#374756] pr-6 sm:pr-8 md:pr-12 no-underline font-[Roboto]"
          onClick={handleToggle}
        >
          {isSignUp ? "Log In" : "Sign Up"}
        </Link>

        <div>
          <img
            src={menu}
            className="text-2xl cursor-pointer w-[29px] h-[19px] text-[#374756]"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <HamburgerMenu
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        languages={languages}
      />
    </header>
  );
}

export default Header;