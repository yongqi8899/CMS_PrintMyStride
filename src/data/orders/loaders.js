const API_URL = import.meta.env.VITE_BASE_URL  || 'http://localhost:8080';

export const getAllOrders = async () => {
  const res = await fetch(`${API_URL}/orders`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
export const getOneOrder = async (id) => {
  const res = await fetch(`${API_URL}/orders/${id}`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
