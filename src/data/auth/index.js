const API_URL = import.meta.env.VITE_BASE_URL;

if (!API_URL)
  throw new Error("API URL is required, are you missing a .env file?");

const baseUrl = `${API_URL}/auth`;

export const signup = async (formData) => {
  const res = await fetch(`http://localhost:8080/auth/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error("An Error occured while signing up");
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};

export const signin = async (formData) => {
  const res = await fetch(baseUrl + "/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error("An Error occured while signing up");
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};
