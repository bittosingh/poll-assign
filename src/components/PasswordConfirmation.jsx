import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const PasswordConfirmation = ({
    password,
    handleChange,
    error
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };
    return (
        <div className="mb-4 relative">
            <label
                htmlFor="password"
                className="block text-sm text-[#5a6978] mb-[12px] mt-[20px] font-euclidMedium text-[15px] "
            >
                Password:
            </label>
            <div className="relative">
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`w-full h-[44px] border bg-[#e8eaee] shadow-inner px-[20px] py-[10px] text-[17px] leading-[24px] font-medium rounded-[7px] text-[#374756] focus:outline-none ${error ? "border-red-500 focus:ring-0" : "border-transparent focus:ring-1 focus:ring-[#19b7ea]"}`}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                    <FaEye
                        size={22}
                        className="text-[#7f8b96]"
                        style={{
                            color: isPasswordVisible ? '#19b7ea' : '#7f8b96',
                        }}
                    />
                </button>
            </div>
            {error && (
                <p className="bg-[#FF768F] text-[#374756] text-sm leading-[24px] rounded-[6px] mt-[5px] mb-[16px] px-[10px] text-left">
                    {error}
                </p>
            )}
        </div>
    );
};

export default PasswordConfirmation;