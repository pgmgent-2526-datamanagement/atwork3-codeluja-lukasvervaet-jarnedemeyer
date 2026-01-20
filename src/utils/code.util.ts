import { FormEvent } from "react";


export const changeCode = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  const newCode = form.elements.namedItem("new-code") as HTMLInputElement;
  const repeatCode = form.elements.namedItem("repeat-code") as HTMLInputElement;
  
  if (newCode.value !== repeatCode.value) {
    alert("Codes do not match!");
    return;
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


  } catch (error) {
    console.error("Error changing code:", error);
    alert("An error occurred while changing the code.");
  }
};