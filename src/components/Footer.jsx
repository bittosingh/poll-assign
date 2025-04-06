import React from 'react';
import AppStore from '../assets/footer/appStore.webp';
import PlayStore from '../assets/footer/googleplay.png';
import fbIcon from '../assets/footer/footer-fbIcon.svg';
import xicon from '../assets/footer/footer-twitterIcon.svg';
import instaIcon from '../assets/footer/footer-instaIcon.svg';

const Footer = () => {
    return (
        <div className="w-full bg-white px-4 sm:px-10 lg:px-[70px] sm:mt-[0px]  md:mt-[50px] lg:mt-[90px]">
            <div className="flex justify-center gap-6 pt-5 mt-[-30px] sm:pt-5 md:pt-0 flex-wrap text-center">
                <img src={AppStore} className="h-[43px] w-[120px]" alt="App Store" />
                <img src={PlayStore} className="h-[43px] w-[145px]" alt="Play Store" />
            </div>
            <p className="mb-8 mt-8 text-2xl sm:text-3xl text-center text-gray-600">
                Over <span className="font-bold text-gray-700">30 million</span> downloads.
            </p>
            <div className="border-gray-300 border-[0.1px] mb-6"></div>

            <div className="grid custom-grid gap-8 text-sm mt-[30px]">
                <div className="space-y-5 text-center lg:text-left">
                    <h3 className="mb-6  text-[16px]  font-euclidBold font-[700] text-[#374756]">Zoosk Dating</h3>
                    <ul className="space-y-6 text-[16px] text-[#374756] leading-[20px] font-euclidMedium font-[500]">
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">iPhone Dating App</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Android Dating App</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Start Dating</a></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="space-y-5 text-center lg:text-left">
                    <h3 className="mb-6  text-[16px]  font-euclidBold font-[700] text-[#374756]">Dating and Relationship Advice</h3>
                    <ul className="space-y-6 text-[16px] text-[#374756] leading-[20px] font-euclidMedium font-[500]">
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Dating Tips</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Online Dating Advice</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Relationship Advice</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Single Life</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="space-y-5 text-center lg:text-left">
                    <h3 className="mb-6 font-bold text-[16px] font-euclidBold font-[700] text-[#374756]">About Zoosk</h3>
                    <ul className="space-y-6 text-[16px] text-[#374756] leading-[20px] font-euclidMedium font-[500]">
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">About Us</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Success Couples</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Careers</a></li>
                        <li className="2"><a href="#" className="hover:text-gray-500">Help</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="space-y-5 text-center lg:text-left">
                    <h3 className="mb-6 font-euclidBold text-[16px] font-[700] text-[#374756]">Follow Zoosk</h3>
                    <ul className="flex gap-9 sm:gap-6 text-[#374756] cursor-pointer justify-center lg:justify-start">
                        {/* Facebook Icon */}
                        <li>
                            <img
                                src={fbIcon}
                                alt="Facebook"
                                className="w-[40px] sm:w-[43px] transition-all duration-300 hover:opacity-80"
                            />
                        </li>
                        {/* Xbox Icon */}
                        <li>
                            <img
                                src={xicon}
                                alt="Xbox"
                                className="w-[40px] sm:w-[43px] transition-all duration-300 hover:opacity-80"
                            />
                        </li>
                        {/* Instagram Icon */}
                        <li>
                            <img
                                src={instaIcon}
                                alt="Instagram"
                                className="w-[40px] sm:w-[43px] transition-all duration-300 hover:opacity-80"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="flex flex-col sm:flex-col-1 items-center mt-8 space-y-2 text-[15px] text-center text-[#374756] sm:flex-row sm:justify-between sm:space-y-0 font-euclidMedium lg:text-left">
                <div className="flex flex-wrap text-[16px] justify-center gap-4 sm:gap-3  font-[500] lg:justify-start order-1 sm:order-2 pl-7 pr-8">
                    <a href="#" className="hover:text-gray-500">Accessibility</a> |
                    <a href="#" className="hover:text-gray-500">Safety</a> |
                    <a href="#" className="hover:text-gray-500">Terms of Service</a> |
                    <a href="#" className="hover:text-gray-500">Privacy</a> |
                    <a href="#" className="hover:text-gray-500">Imprint</a> |
                    <a href="#" className="hover:text-gray-500">Online Dating Safety Policy</a>
                </div>
                <p className="text-[16px] order-2 sm:order-1 mt-12 sm:mt-0 font-eculidLight leading-[24px]">
                    © Copyright 2007-2025 Zoosk, Inc. All rights reserved.
                </p>
            </div>
            {/* Legal Notice */}
            <p className="mt-8 text-[12px] text-left text-gray-700 pb-20 leading-[17px] font-eculidBold ">
                <strong>ZOOSK DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON THE MEMBERS OR THE SUBSCRIBERS OF THIS WEBSITE.</strong>  <br />
                <strong>HOWEVER, THE SAFETY AND SECURITY OF OUR MEMBERS IS OUR TOP PRIORITY. BY SIGNING UP TO OUR SERVICES YOU ALSO AGREE TO READ AND FOLLOW OUR </strong>
                <a href="#" className="text-[#1379de] text-[12px] font-[700] font-eculidMedium">ONLINE DATING SAFETY TIPS</a>.
            </p>
        </div>
    );
};

export default Footer;