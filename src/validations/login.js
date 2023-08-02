import * as yup from "yup";

const schema = yup.object().shape({
  usernameOrEmail: yup
    .mixed()
    .test("usernameOrEmail", "Invalid username or email", function (value) {
      const { path, createError } = this;

      if (!value) {
        return createError({ path, message: "Username or email is required" });
      }

      const isEmail = yup.string().email().isValidSync(value);
      const isUsername = /^[a-zA-Z0-9_-]+$/.test(value);

      if (!isEmail && !isUsername) {
        return createError({ path, message: "Invalid username or email" });
      }

      return true;
    })
    .required("Username or email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default schema;
