const API_URL = import.meta.env.VITE_BASE_URL  || 'http://localhost:8080';

export const getAllUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};

export const getOneUser = async () => {
  const res = await fetch(`${API_URL}/users/${id}`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};