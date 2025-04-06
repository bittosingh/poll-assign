// export const validateEmail = (email) => {
//   if (!email) {
//     return "Please enter a valid email in the name@email.com format.";
   
//   }
//   else if (!/\S+@\S+\.\S+/.test(email)) {
//     // else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//     return "Please enter a valid email in the name@email.com format.";
//   }
//   return "";
// };

// export const validatePassword = (password) => {
//   if (!password) {
//     return "Please enter your password.";
//   } else if (password.length < 8) {
//     return "Your password should be 8 characters or longer.";
//   }
//   return "";
// };

// export const validateLoginForm = (formData) => {
//   let errors = {};
//   errors.email = validateEmail(formData.email);
//   errors.password = validatePassword(formData.password);
//   return errors;
// };


// src/formValidation/Validate.js

export const validateEmail = (email) => {
  if (!email) return "Please enter a valid email in the name@email.com format.";
  else if (!/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email in the name@email.com format.";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Please enter your password.";
  else if (password.length < 8) return "Your password should be 8 characters or longer.";
  return "";
};

export const validateLoginForm = (formData) => {
  return {
    email: validateEmail(formData.email),
    password: validatePassword(formData.password),
  };
};
