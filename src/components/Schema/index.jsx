import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match",
  ),
});
