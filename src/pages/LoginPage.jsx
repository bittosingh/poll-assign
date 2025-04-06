import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { validateLoginForm } from "../formValidation/Validation";
import PasswordConfirmation from "../components/PasswordConfirmation";
import BgImg from "../assets/bg/background-img.png";
import Captcha from "../components/CAPTCHA";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    email: "",
    password: "",
  });

  const [captchaValidation, setCaptchaValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const errors = validateLoginForm(formState);
    setErrorState(errors);
    const hasErrors = Object.values(errors).some((err) => err);
    if (hasErrors || !captchaValidation) return;
    dispatch(loginUser(formState));
  };

  useEffect(() => {
    if (user) {
      setFormState({
        email: "",
        password: "",
        captchaValidation: false,
        isPasswordVisible: false,
      });
      setErrorState({
        email: "",
        password: "",
      });
      navigate("/polls");
    }
  }, [user, navigate]);
  return (
    <div
      style={{
        background: `url(${BgImg}) center bottom no-repeat #F7F8FB`,
        margin: "0",
      }}
    >
      <div className="flex justify-center">
        <div
          className="w-full max-w-[480px] relative sm:w-[100%] sm:px-4 lg:w-[480px] sm:p-26 lg:mt-[-125px] pb-27 p-2.5"
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
                  className="block text-sm text-[#5a6978] mb-[10px] pt-[40px] leading-[22px] font-euclidMedium text-[15px] font-[400]"
                >
                  Email Address:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className={`w-full h-[44px] font-sans border bg-[#e8eaee] shadow-inner px-[20px] py-[10px] text-[17px] leading-[24px] font-medium rounded-[7px] text-[#374756] focus:outline-none ${
                    submitted && errorState.email
                      ? "border-red-500 focus:ring-0"
                      : "border-transparent focus:ring-1 focus:ring-[#19b7ea]"
                  }`}
                />
                {submitted && errorState.email && (
                  <p className="bg-[#FF768F] text-[#374756] text-sm leading-[24px] rounded-[6px] my-[5px] mb-[16px] px-[10px] text-left">
                    {errorState.email}
                  </p>
                )}
              </div>

              <PasswordConfirmation
                password={formState.password}
                handleChange={handleChange}
                // error={errorState.password}
                error={submitted ? errorState.password : ""}
              />

              <div className="mb-6 text-center mb-[15px] mt-[19px]">
                <Link
                  to=""
                  className="text-sm no-underline text-[#5a6978] text-[15px] font-[600] font-sans"
                >
                  Forgot Password?
                </Link>
              </div>
              <Captcha
                captchaValidation={captchaValidation}
                setCaptchaValidation={setCaptchaValidation}
              />
              <button
                type="submit"
                className={`w-full py-[13px] px-0 leading-[26px] font-sans rounded-[250px] shadow-[0_5.83px_19.83px_rgba(8,46,81,.13)] ${
                  captchaValidation
                    ? "bg-[#19b7ea] text-white"
                    : "bg-[#dadada] text-[#999]"
                } border-0 cursor-pointer text-[20px] mb-[20px]`}
                disabled={
                  loading || !captchaValidation
                  // ||
                  // errorState.email ||
                  // errorState.password
                }
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto "></div>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            {/* Social login buttons */}
            <div className="flex items-center justify-evenly">
              <div className="border border-[#7f8b96] w-[100px]"></div>
              <span className="text-[#7f8b96] text-[13px]">Or</span>
              <div className="w-[100px] border border-[#7f8b96]"></div>
            </div>
            <div className="my-6 flex flex-col items-center justify-center space-y-4">
              <button
                className="flex w-full h-[45px] cursor-pointer items-center justify-center py-2 px-4 rounded-md text-[15px] font-[500] text-[#1b3e85] bg-[white] rounded-[8px] mb-[17px] font-euclidMedium whitespace-nowrap"
                style={{ border: "1px solid rgba(150, 159, 175, .7)" }}
              >
                <FaFacebook className="mr-2 w-[30px] h-[25px] text-[#1b3e85]" />
                Log in with Facebook*
              </button>
              <button
                className="flex w-full h-[45px] items-center justify-center py-2 px-4 rounded-md bg-[white] rounded-[8px] text-[#5a6978] cursor-pointer font-euclidMedium text-center whitespace-nowrap"
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

            <p className="text-sm text-left text-[#7f8b96] text-[11px] leading-[20px] pb-[20px] mt-[-10px] font-eculidLight">
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
