import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const schema = z.object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Please enter valid email")
      .regex(
        new RegExp(
          "^[a-z]{1}[a-z0-9._-]+[a-z]+@+@?[a-z]{1}?.@?[a-z]+.?[a-z]{2,6}.?[a-z]{2,6}$"
        )
      ),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must contain at least 8 characters")
      .regex(
        new RegExp(
          "^(?=.*d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[^a-zA-Z0-9])(?!.*s).{8,12}$"
        ),
        "Password must match the following: One uppercase, lowercase, number, special characters min 8 max 12 characters length."
      )
      .max(12),
    checkbox: z
      .boolean()
      .refine((value) => value, "The checkbox must be checked."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log("IT WORKED", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="h-full">
      <h1 className="text-[#1E0E62] text-center font-semibold text-xl sm:text-4xl py-3 sm:pt-8 sm:pb-6">
        Sign Up Now
      </h1>
      <form className="grid gap-4" onSubmit={handleSubmit(submitData)}>
        <>
          <input
            type="text"
            placeholder="Your email"
            className={`focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-500 border px-6 py-2 rounded-full placeholder:text-sm text-black ${
              errors.email?.message ? "border-red-500" : ""
            }`}
            {...register("email")}
          />
          {errors.email && (
            <span
              className={`relative text-xs -mt-3 mx-2 ${
                errors.email?.message ? "text-red-500" : ""
              }`}
            >
              {errors.email?.message}
            </span>
          )}
        </>
        <>
          <input
            type="text"
            placeholder="Your password"
            className={`focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-500 border px-6 py-2 rounded-full placeholder:text-sm text-black ${
              errors.password?.message ? "border-red-500" : ""
            }`}
            {...register("password")}
          />
          {errors.password && (
            <span
              className={`relative text-xs -mt-3 mx-2 ${
                errors.password?.message ? "text-red-500" : ""
              }`}
            >
              {errors.password?.message}
            </span>
          )}
        </>
        <>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className={`accent-[#25DAC5] sm:h-5 sm:w-5 cursor-pointer ${
                errors.checkbox?.message ? "border-red-500" : ""
              }`}
              {...register("checkbox")}
            />
            <h1 className="text-gray-400 text-sm sm:text-base">
              I agree to the Terms of Service.
            </h1>
          </div>
          {errors.checkbox && (
            <span
              className={`relative text-xs -mt-3 mx-2 ${
                errors.checkbox?.message ? "text-red-500" : ""
              }`}
            >
              {errors.checkbox?.message}
            </span>
          )}
        </>
        <button
          type="submit"
          className="p-2 rounded-full bg-[#482BE7] text-white hover:bg-indigo-800"
        >
          Sign Up
        </button>
      </form>
      <span className="flex items-center gap-2 font-medium text-slate-500 sm:py-2 lg:py-5">
        <hr className="w-full" />
        <h1 className="whitespace-pre">or</h1>
        <hr className="w-full" />
      </span>
      <button className="p-2 rounded-full text-white bg-[#1DA1F2] w-full hover:bg-sky-600">
        Login via Twitter
      </button>
      <div className="flex items-center gap-3 py-2 sm:py-5">
        <h1 className="text-center xl:pl-6 text-gray-400 text-sm sm:text-base">
          Do you have an Account?
        </h1>
        <span className="text-[#25DAC5]">
          <Link to={"/"}>Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
