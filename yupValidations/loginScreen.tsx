import { string, object } from "yup";

const loginValidation = object({
  email: string()
    .email("Email is not in the correct format.")
    .required("Email is required."),
  password: string()
    .min(4, "Password should be at least 4 characters")
    .required("Password is required"),
});

export default loginValidation;
