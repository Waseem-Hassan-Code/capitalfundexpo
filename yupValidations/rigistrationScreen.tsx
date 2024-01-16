import { string, object } from "yup";

const registrationValidation = object({
  name: string().min(3, "Name should e atleast 3 characters").required(),
  email: string()
    .email("Email is not in the correct format.")
    .required("Email is required."),
  password: string()
    .min(4, "Password should be at least 4 characters")
    .required("Password is required"),
  gender: string().required("Gender is required"),
});

export default registrationValidation;
