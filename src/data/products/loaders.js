const API_URL = import.meta.env.VITE_BASE_URL  || 'http://localhost:8080';

export const getAllProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};

export const getOneProduct = async () => {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};