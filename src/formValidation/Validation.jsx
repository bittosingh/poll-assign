// import React from 'react';

export const validateEmail = (email) => {
  if (!email) {
    return "Please enter a valid email in the name@email.com format.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "Please enter a valid email in the name@email.com format.";
  }
  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return "Please enter your password.";
  } else if (password.length < 8) {
    return "Your password should be 8 characters or longer.";
  }
  return "";
};

export const validateForm = (formData) => {
  let errors = {};
  errors.email = validateEmail(formData.email);
  errors.password = validatePassword(formData.password);
  return errors;
};
