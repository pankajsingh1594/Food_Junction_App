import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./Schema";
import HeaderComponent from "./HeaderComponent.jsx";

// Login Page Component
const LoginForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="p-5 pt-28 pb-12 min-h-[100vh] flex justify-center bg-dark-background text-white max-md:pb-20">
      <div className="w-[70%] p-10 m-10 shadow-2xl shadow-secondary max-md:m-0 max-md:w-full max-md:p-5">
        <h1 className="text-4xl mb-7 font-bold text-secondary max-md:text-3xl max-md:mb-5">
          Login Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-5 max-md:flex-col">
            <label
              htmlFor="name"
              className="mr-5 mt-3 text-lg w-[30%] max-md:mt-0 max-md:w-full"
            >
              Name
            </label>
            <div className="w-full max-md:mt-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your name"
                className="border-1 border-gray-400 px-4 py-3 rounded-2xl outline-0 w-full"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-700 capitalize">{errors.name}</p>
              ) : null}
            </div>
          </div>

          <div className="flex mb-5 max-md:flex-col">
            <label
              htmlFor="email"
              className="mr-5 mt-3 text-lg w-[30%] max-md:mt-0 max-md:w-full"
            >
              Email
            </label>
            <div className="w-full max-md:mt-2">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Please enter your email"
                className="border-1 border-gray-400 px-4 py-3 rounded-2xl outline-0 w-full"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-700 capitalize">{errors.email}</p>
              ) : null}
            </div>
          </div>

          <div className="flex mb-5 max-md:flex-col">
            <label
              htmlFor="password"
              className="mr-5 mt-3 text-lg w-[30%] max-md:mt-0 max-md:w-full"
            >
              Password
            </label>
            <div className="w-full max-md:mt-2">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Please enter your password"
                className="border-1 border-gray-400 px-4 py-3 rounded-2xl outline-0 w-full"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-red-700 capitalize">{errors.password}</p>
              ) : null}
            </div>
          </div>

          <div className="flex mb-5 max-md:flex-col">
            <label
              htmlFor="confirm_password"
              className="mr-5 mt-3 text-lg w-[30%] max-md:mt-0 max-md:w-full"
            >
              Confirm Password
            </label>
            <div className="w-full max-md:mt-2">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Please enter your Confirm Password"
                className="border-1 border-gray-400 px-4 py-3 rounded-2xl outline-0 w-full"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-700 capitalize">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <input
              type="submit"
              className="bg-primary text-white w-30 h-12 rounded-full border-none outline-none cursor-pointer mt-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
