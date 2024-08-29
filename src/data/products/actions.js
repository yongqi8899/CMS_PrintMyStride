import { redirect } from "react-router-dom";
import { showToast } from "@/utils/index";

export const createProduct = async ({ request }) => {
  const formData = await request.formData();
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  showToast(res, "create failed!", "create success!");
  return redirect("/products");
};

export const updateProduct = async ({ params, request }) => {
  const id = params.id;
  const formData = await request.formData();
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`, {
    method: "PUT",
    credentials: "include",
    body: formData,
  });
  showToast(res, "update failed!", "update success!");
  return redirect(`/products/${id}`);
};

export const deleteProduct = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  showToast(res, "Delete failed!", "Delete success!");
  return redirect("/products");
};
