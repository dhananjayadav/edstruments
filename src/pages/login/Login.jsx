import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";

export const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
    alert("Login Successful!");
  };

  return (
    <div className="login-page-main-container">
      <div className="login-page-container">
        <h1 className="login-page-title">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="login-page-form">
              <div className="login-page-field">
                <label htmlFor="email" className="login-page-label">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="login-page-input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="login-page-error"
                />
              </div>

              <div className="login-page-field">
                <label htmlFor="password" className="login-page-label">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="login-page-input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="login-page-error"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="login-page-button"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
