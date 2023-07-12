import { z } from "zod";

export const validateSignup = z
  .object({
    firstname: z.string().min(5),
    lastname: z.string().min(5),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export type User = z.infer<typeof validateSignup>;

export const validateLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type Login = z.infer<typeof validateLogin>;
