import * as Yup from "yup";
const authValidation = {
  name: Yup.string().max(20).min(3).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  review: Yup.string().required("Please Something Comment"),
  //   password: Yup.string().max(50).min(6).required("Password is required"),
  //   confirmpassword: Yup.string()
  //     .max(50)
  //     .min(5)
  //     .oneOf([Yup.ref("password"), null], "Confirm Password Must be matches")
  //     .required("Confirm Password is required"),
};

export const ReviewValidation = Yup.object({
  name: authValidation.name,
  email: authValidation.email,
  review: authValidation.review,
});
