import * as yup from "yup";

const schema = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .max(50, "Username or email must be at most 50 characters")
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
    .min(16, "Your password must be at least 16 characters long")
    .matches(
      /[a-z]/,
      "Your password must include at least one lowercase letter"
    )
    .matches(
      /[A-Z]/,
      "Your password must include at least one uppercase letter"
    )
    .matches(/[0-9]/, "Your password must include at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Your password must include at least one special character"
    )
    .required("Enter your password in this field"),
});

export default schema;
