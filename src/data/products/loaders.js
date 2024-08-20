export const getAllProducts = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
let allProducts = getAllProducts()
export const getOneProduct = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};