export const getAllOrders = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
export const getOneOrder = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${id}`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
