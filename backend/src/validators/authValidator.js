import { body } from "express-validator";

const registrationValidation = () => {
  return [
    body("fullname").isEmpty().withMessage("Email is Required"),

    body("username").isEmpty().withMessage("Username is Required"),

    body("email")
      .isEmail()
      .withMessage("Invalid Email")
      .isEmpty()
      .withMessage("Email is Required"),

    body("password").isEmpty().withMessage("Password is Required"),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Invalid Email")
      .isEmpty()
      .withMessage("Email is Required"),

    body("password").isEmpty().withMessage("Password is Required"),
  ];
};

export { registrationValidation, loginValidation };
