import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import hCaptchaImg from "../assets/footer/hcapctha.jpg";
import { toast, ToastContainer } from "react-toastify";
import { validateLoginForm } from "../formValidation/Validation";
import PasswordConfirmation from "../components/PasswordConfirmation"; // Importing PasswordConfirmation component

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    captchaValidation: false,
    errors: {
      email: "",
      password: "",
    },
    // isPasswordVisible: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      const updatedState = {
        ...prevState,
        [name]: value,
        errors: {
          ...prevState.errors,
          [name]: validateLoginForm({ ...prevState, [name]: value })[name], // Update error for specific field
        },
      };

      return updatedState;
    });
  };

  const togglePasswordVisibility = () => {
    setFormState((prevState) => ({
      ...prevState,
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateLoginForm(formState);
    setFormState((prevState) => ({
      ...prevState,
      errors,
    }));

    if (errors.email || errors.password) return;

    dispatch(
      loginUser({ email: formState.email, password: formState.password })
    );
  };

  useEffect(() => {
    if (user) {
      setFormState({
        email: "",
        password: "",
        captchaValidation: false,
        isPasswordVisible: false,
        errors: {
          email: "",
          password: "",
        },
      });
    }
  }, [user]);

  return (
    <div
      style={{
        background:
          "url(https://static3.zoosk.com/browser-86c22481/touch/en-GB/login-image-aes-v2-desktop.1bed4140b688bfc1e97a.png) center bottom no-repeat #F7F8FB",
        margin: "0",
      }}
    >
      <div className="flex justify-center">
        <div
          className="w-full max-w-[480px] relative sm:w-[100%] sm:px-4 lg:w-[480px] sm:p-26 lg:mt-[-125px] pb-27"
          style={{ filter: "drop-shadow(0px 4px 20px rgba(55, 71, 86, .15))" }}
        >
          <div className="top-0 left-0 w-full">
            <img
              src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
              alt="Form Border"
              className="w-full h-auto"
            />
          </div>
          <div
            className="bg-[white] pl-[40px] pr-[40px] rounded-b-2xl shadow-lg relative z-10"
            style={{ backgroundColor: "#fff" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-[#5a6978] mb-[10px] pt-[40px] leading-[22px] font-sans text-[15px] font-medium"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className={`w-full h-[44px] font-sans border bg-[#e8eaee] shadow-inner px-[20px] py-[10px] text-[17px] leading-[24px] font-medium rounded-[7px] text-[#374756] focus:outline-none ${
                    formState.errors.email
                      ? "border-red-500 focus:ring-0"
                      : "border-transparent focus:ring-1 focus:ring-[#19b7ea]"
                  }`}
                />
                {formState.errors.email && (
                  <p className="bg-[#FF768F] text-[#374756] text-sm leading-[24px] rounded-[6px] my-[5px] mb-[16px] px-[10px] text-left">
                    {formState.errors.email}
                  </p>
                )}
              </div>

              <PasswordConfirmation
                password={formState.password}
                isPasswordVisible={formState.isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                handleChange={handleChange}
                error={formState.errors.password}
              />

              <div className="mb-6 text-center mb-[15px] mt-[19px]">
                <Link
                  to=""
                  className="text-sm no-underline text-[#5a6978] text-[15px] font-[600] font-sans"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="box-border w-[300px] h-auto p-0 m-0 border border-solid rounded-[4px] border-[#e0e0e0] bg-[#fafafa] cursor-pointer block mb-[7px]">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-between">
                    <div
                      className={`mr-2 mt-5 w-[30px] h-[30px] relative border-2 rounded-[4px] cursor-pointer ${
                        formState.captchaValidation
                          ? "border-[#215b6e]"
                          : "border-gray-400"
                      }`}
                      onClick={() =>
                        setFormState((prevState) => ({
                          ...prevState,
                          captchaValidation: !prevState.captchaValidation,
                        }))
                      }
                    >
                      {formState.captchaValidation && (
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
                      className="text-[rgb(85,85,85)] pr-20 pt-6 text-[13px] pl-[10px]"
                    >
                      I am human
                    </label>
                    <img
                      src={hCaptchaImg}
                      className="h-[43px] ml-[30px] mt-1"
                    />
                  </div>
                  <div className="flex justify-center ml-58 mb-2">
                    <a
                      href="#"
                      className="text-sm text-[#374756] text-[8px] hover:underline"
                    >
                      Privacy-
                    </a>
                    <a
                      href="#"
                      className="text-sm text-[#374756] text-[8px] hover:underline"
                    >
                      Terms
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full py-[13px] px-0 leading-[26px] rounded-[250px] shadow-[0_5.83px_19.83px_rgba(8,46,81,.13)] ${
                  formState.captchaValidation
                    ? "bg-[#19b7ea] text-white"
                    : "bg-[#dadada] text-[#999]"
                } border-0 cursor-pointer text-[20px] mb-[20px]`}
                disabled={
                  loading ||
                  !formState.captchaValidation ||
                  formState.errors.email ||
                  formState.errors.password
                }
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Log In"
                )}
              </button>
            </form>
            <div className="flex items-center justify-evenly">
              <div className="border border-[#7f8b96] w-[100px]"></div>
              <span className="text-[#7f8b96] text-[13px]">Or</span>
              <div className="w-[100px] border border-[#7f8b96]"></div>
            </div>
            <div className="my-6 flex flex-col items-center justify-center space-x-4">
              <button
                className="flex w-full h-[45px] cursor-[pointer] items-center justify-center py-2 px-4 rounded-md text-[15px] font-[500] text-[#1b3e85] bg-[white] rounded-[8px] mb-[17px] "
                style={{ border: "1px solid rgba(150, 159, 175, .7)" }}
              >
                <FaFacebook className="mr-2 w-[30px] h-[25px] text-[#1b3e85]" />
                Log in with Facebook*
              </button>
              <button
                className="flex w-full h-[45px] items-center justify-center py-2 text-[#5a6978] px-4 rounded-md bg-[white] rounded-[8px] cursor-[pointer] "
                style={{ border: "1px solid rgba(150, 159, 175, .7)" }}
              >
                <img
                  src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/google-logo.ef9bd4aeb1234ae290c7.svg"
                  alt="Google"
                  className="mr-2 w-[30px] h-[25px]"
                />
                Log in with Google*
              </button>
            </div>
            <p className="text-sm text-left text-[#7f8b96] text-[11px] leading-[20px] pb-[20px] mt-[-10px]">
              *By selecting "Log in with Facebook" or "Log in with Google", you
              agree to our{" "}
              <a
                href="https://docviewer.zoosk.com/legal-tos-en.html"
                className="text-[#7f8b96] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>
              (including the mandatory arbitration of disputes) and consent to
              our{" "}
              <a
                href="https://docviewer.zoosk.com/legal-privacy-en.html"
                className="text-[#7f8b96] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoginPage;
