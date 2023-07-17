import React from "react";
import MainLayout from "../../components/MainLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  console.log(errors);

  const submitHandler = (data) => {
    console.log(data);
  };

  const password = watch("password");
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Name field is required",
                  },
                })}
                placeholder="Enter name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 mb-1 rounded-lg px-5 py-4 font-semibold outline-none block border ${
                  errors.name ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-sm font-semibold">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    messgae: "Enter a valid email address",
                  },
                  required: {
                    value: true,
                    message: "Email field is required",
                  },
                })}
                placeholder="Enter Email"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 mb-1 rounded-lg px-5 py-4 font-semibold outline-none block border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm font-semibold">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 character",
                  },
                  required: {
                    value: true,
                    message: "Password field is required",
                  },
                })}
                placeholder="Enter Password"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold outline-none block border border-[#c3cad9]"
              />
              {errors.password?.message && (
                <p className="text-red-500 text-sm font-semibold">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[#5a7184] font-semibold block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  validate: (value) => {
                    if (value !== password) {
                      return "password Don not match";
                    }
                  },
                  required: {
                    value: true,
                    message: "Confirm Password field is required",
                  },
                })}
                placeholder="Enter confirm Password"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold outline-none block border border-[#c3cad9]"
              />
              {errors.confirmPassword?.message && (
                <p className="text-red-500 text-sm font-semibold">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            {/* link */}
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-primary"
            >
              Forgot Password
            </Link>
            <button
              disabled={!isValid}
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Register
            </button>
            <p className="text-sm font-semibold text-[#5a7184] ">
              {" "}
              You have an account?{" "}
              <Link to="/login" className="text-primary">
                Login now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
