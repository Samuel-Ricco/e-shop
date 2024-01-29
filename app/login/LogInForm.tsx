"use client";

import { useState } from "react";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "../components/CustomButton";
import { useLogIn } from "@/hooks/LogInHooks";

const LogInForm = () => {
  const [isLoading, SetIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const logIn = useLogIn();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    SetIsLoading(true);

    try {
      await logIn.auth(data.email, data.password);
      console.log(logIn.token);
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      SetIsLoading(false);
    }
  };

  return (
    <>
      <h1
        className="
          text-4xl 
          font-bold 
          text-orange-500 
          text-center"
      >
        Log-In
      </h1>
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      <CustomButton
        label={isLoading ? "Loading" : "LogIn"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default LogInForm;
