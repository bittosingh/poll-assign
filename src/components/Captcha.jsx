import React from "react";
import hCaptchaImg from "../assets/footer/hcapctha.jpg";

const Captcha = ({ captchaValidation, setCaptchaValidation }) => {
  
  return (
    <div className="box-border w-[300px] h-auto p-0 m-0 border border-solid rounded-[4px] border-[#e0e0e0] bg-[#fafafa] cursor-pointer block mb-[7px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-between">
          <div
            className={`mr-2 mt-5 w-[30px] h-[30px] relative border-2 rounded-[4px] cursor-pointer ${
              captchaValidation ? "border-[#215b6e]" : "border-gray-400"
            }`}
            onClick={() => setCaptchaValidation((prevState) => !prevState)}
          >
            {captchaValidation && (
              <svg
                className="w-6 h-10 border-green-400 text-green-600 absolute top-0 left-0 right-0 bottom-0 m-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            )}
          </div>
          <label
            htmlFor="captcha"
            className="text-[rgb(85,85,85)] pr-20 pt-6 text-[13px] pl-[10px] font-sans"
          >
            I am human
          </label>
          <img src={hCaptchaImg} className="h-[43px] ml-[30px] mt-1" />
        </div>
        <div className="flex justify-center ml-58 mb-2">
          <a href="#" className="text-sm text-[#374756] text-[8px] hover:underline">
            Privacy-
          </a>
          <a href="#" className="text-sm text-[#374756] text-[8px] hover:underline">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Captcha;