"use client";
import React, { Suspense, useState } from "react";
import Loading from "./loading";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const token = response.json();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 flex-col max-w-sm mx-auto"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
