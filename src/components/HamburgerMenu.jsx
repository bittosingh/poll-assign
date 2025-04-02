import React from "react";
import { IoMdClose } from "react-icons/io";
import AppStore from "../assets/asideBar/appStore.webp";
import PlayStore from "../assets/asideBar/googleplay.png";
import fbIcon from "../assets/footer/fb.svg";
import xicon from "../assets/footer/xicon.svg";
import instaIcon from "../assets/footer/instaicon.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import dropdown from '../assets/asideBar/dropdown.png'
const HamburgerMenu = ({ isSidebarOpen, toggleSidebar, selectedLanguage, setSelectedLanguage, isDropdownOpen, toggleDropdown, languages }) => {
  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-30"
            style={{
              backgroundColor: "rgba(233, 241, 248, 0.8)",
            }}
          ></div>
          {/* Sidebar Content */}
          <div
            className="fixed top-0 right-0 z-50 bg-white shadow-lg w-full lg:w-[530px] p-5 md:p-9 transition-transform transform overflow-y-auto max-h-[100vh]"
            style={{
              transform: isSidebarOpen ? "translateX(0)" : "translateX(100%)",
              backgroundImage: 'url("https://via.placeholder.com/1500x1500")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-between p-0">
              <img
                src="https://static3.zoosk.com/browser-bf2e74dc/touch/en-US/assets/images/svg/aes-heart-red.svg"
                alt="Zoosk Logo"
                className="w-12 h-9"
              />
              <button
                onClick={toggleSidebar}
                className="text-gray-400 cursor-pointer hover:text-gray-300"
              >
                <IoMdClose className="w-10 h-14" />
              </button>
            </div>
            {/* Sidebar Navigation */}
            <nav className="flex flex-col pt-15 pl-4 space-y-3 text-base text-[18px] leading-[23px] font-sans font-[500] text-center lg:text-left ">
              <a
                href="#"
                className="block text-[#374756] hover:text-gray-400 pb-4"
              >
                About Zoosk
              </a>
              <a
                href="#"
                className="block text-[#374756] hover:text-gray-400 pb-4"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-[#374756] hover:text-gray-400 pb-4"
              >
                Dating & Relationship
              </a>
              <a href="#" className="block text-[#374756] hover:text-gray-400">
                Press
              </a>
            </nav>

            <nav className="flex flex-col pt-10 pl-3 space-y-3 text-base font-sans font-[500] text-[18px] leading-[23px] text-center lg:text-left ">
              <a
                href="#"
                className="block text-gray-500 hover:text-gray-400 pb-3"
              >
                Privacy
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-gray-400 pb-3"
              >
                Safety
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-gray-400 pb-3"
              >
                Terms of Use
              </a>
            </nav>
            <div className="flex flex-col mt-6 mb-10">
              <div className="flex gap-9 pt-5 flex-wrap lg:gap-8 justify-center lg:justify-start">
                <img
                  src={AppStore}
                  className="h-[40px] w-[120px]"
                  alt="App Store"
                />
                <img
                  src={PlayStore}
                  className="h-[40px] w-[135px]"
                  alt="Play Store"
                />
              </div>

              <div className="flex mt-16 gap-6 justify-center lg:justify-start">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={fbIcon}
                    alt="Facebook"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] hover:opacity-80"
                  />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={xicon}
                    alt="X (formerly Twitter)"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] hover:opacity-80"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instaIcon}
                    alt="Instagram"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] hover:opacity-80"
                  />
                </a>
              </div>            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-25 text-xs text-center text-gray-800 md:text-sm sm:gap-4 gap-10">
              <p className="text-[18px] text-[#374756] font-[500] order-last lg:order-first">© 2025 Zoosk</p>
              <div className="relative  order-first lg:order-last">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between min-w-[202px] h-[40px] px-[25px] py-[8px] text-gray-700 bg-gray-200 border-[1px] border-[#B5BED6] rounded-[8px] text-[16px] font-medium leading-[23px]"
                >
                  {selectedLanguage}
                  <img
                    src={dropdown}
                    alt="Dropdown"
                    className="ml-2 text-[]"
                    style={{ height: "13px", width: "15px" }}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 z-10 w-40 overflow-y-auto bg-white border border-gray-400 rounded shadow-md bottom-full max-h-60">
                    <ul>
                      {languages.map((language, index) => (
                        <li
                          key={index}
                          onClick={() => setSelectedLanguage(language)}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;