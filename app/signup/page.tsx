"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DynamicInputList, { InputType } from "../components/DynamicInputList";
import DynamicButton from "../components/DynamicButton";
import { User, validateSignup } from "@/zodValidator";
import { zodResolver } from "@hookform/resolvers/zod";

const inputList: InputType<User>[] = [
  {
    name: "firstname",
    placeholder: "first name",
    type: "text",
    label: "firstname",
  },
  {
    name: "lastname",
    placeholder: "last name",
    type: "text",
    label: "lastname",
  },
  {
    name: "email",
    placeholder: "example@email.com",
    type: "text",
    label: "email",
  },
  {
    name: "password",
    placeholder: "xxxxxxxx",
    type: "password",
    label: "password",
  },
  {
    name: "confirmPassword",
    placeholder: "xxxxxxxx",
    type: "password",
    label: "confirm password",
  },
];

function SignupForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<User>({ resolver: zodResolver(validateSignup) });

  async function onFormSubmit(data: User) {
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
        inputlist={inputList}
        register={register}
      />
      <DynamicButton
        animate
        size="medium"
        state="primary"
        text="Sign Up"
        type="submit"
      />
    </form>
  );
}

export default SignupForm;
