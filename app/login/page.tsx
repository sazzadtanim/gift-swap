"use client";
import { Login, validateLogin } from "@/zodValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DynamicInputList from "../components/DynamicInputList";
import DynamicButton from "../components/DynamicButton";

function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Login>({ resolver: zodResolver(validateLogin) });

  async function onFormSubmit(data: Login) {
    console.log(data);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      // Use response
    } catch (error) {
      console.error("Login failed", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex gap-4 flex-col max-w-sm mx-auto"
    >
      <DynamicInputList
        errors={errors}
        inputlist={[
          {
            label: "email",
            name: "email",
            placeholder: "example@email.com",
            type: "text",
          },
          {
            label: "password",
            name: "password",
            placeholder: "xxxxxxxx",
            type: "password",
          },
        ]}
        register={register}
      />
      <DynamicButton
        size="medium"
        state="primary"
        text="Login"
        type="submit"
        animate
      />
    </form>
  );
}

export default LoginForm;
