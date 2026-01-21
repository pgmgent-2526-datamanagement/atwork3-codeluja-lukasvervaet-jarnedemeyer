export const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    }),
  });

  if (response.ok) {
    return await response.json();
  } else {
    const errorData = await response.json();
    console.error("Failed to register:", errorData);
    alert(errorData.error || "Registration failed");
  }
};
