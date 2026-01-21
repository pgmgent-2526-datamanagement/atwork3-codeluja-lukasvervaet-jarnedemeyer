// Authentication utilities for user login
import { signIn } from "next-auth/react";

// Handle login with email and password
export const loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");

  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (!result?.error) {
    return result;
  } else {
    console.error("Failed to login", result.error);
    alert("Invalid credentials");
  }
};

// Handle login with access code
export const loginWithCode = async (
  event: React.FormEvent<HTMLFormElement>,
) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const code = formData.get("code");

  const result = await signIn("credentials", {
    redirect: false,
    email: "personeel@code.com",
    password: code,
  });

  if (!result?.error) {
    return result;
  } else {
    console.error("Failed to login", result.error);
    alert("Invalid credentials");
  }
};
