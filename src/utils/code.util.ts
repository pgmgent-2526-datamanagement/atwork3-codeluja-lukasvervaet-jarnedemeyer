import { FormEvent } from "react";
import { getUser } from "./user.util";
import bcrypt from "bcryptjs";


export const changeCode = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  const newCode = form.elements.namedItem("new-code") as HTMLInputElement;
  const repeatCode = form.elements.namedItem("repeat-code") as HTMLInputElement;

  if (newCode.value !== repeatCode.value) {
    return { success: false, error: "Codes do not match!" };
  }

  try {
    const response = await fetch("/api/auth/change-code", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCode: newCode.value }),
    });

    if (!response.ok) {
      throw new Error("Failed to change code");
    }

    return { success: true };
  } catch (error) {
    console.error("Error changing code:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred while changing the code.",
    };
  }
};

export const resetPassword = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // Extract form data before async operations to avoid null currentTarget
  const form = event.currentTarget;
  const newPassword = form.elements.namedItem(
    "new-password",
  ) as HTMLInputElement;
  const repeatPassword = form.elements.namedItem(
    "repeat-password",
  ) as HTMLInputElement;

  const newPasswordValue = newPassword.value;
  const repeatPasswordValue = repeatPassword.value;

  if (newPasswordValue !== repeatPasswordValue) {
    return { success: false, error: "Passwords do not match!" };
  }

  if (newPasswordValue.length < 8) {
    return {
      success: false,
      error: "Password must be at least 8 characters long!",
    };
  }

  const user = await getUser();

  if (bcrypt.compareSync(newPasswordValue, user?.password || "")) {
    return {
      success: false,
      error: "New password cannot be the same as the current password!",
    };
  }

  if (!user) {
    return { success: false, error: "User not authenticated!" };
  }

  try {
    const response = await fetch("/api/auth/reset-password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        newPassword: newPasswordValue,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to reset password");
    }

    return { success: true };
  } catch (error) {
    console.error("Error resetting password:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred while resetting the password.",
    };
  }
};