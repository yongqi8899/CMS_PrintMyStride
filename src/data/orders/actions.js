import { redirect } from "react-router-dom";
import { showToast } from "@/utils/index";

export const createOrder = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });
  showToast(res, "create failed!", "create success!");
  return redirect("/");
};

export const updateOrder = async ({ params, request }) => {
  const id = params.id;
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });
  showToast(res, "update failed!", "update success!");
  return redirect(`/orders/${id}`);
};

export const deleteOrder = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  showToast(res, "Delete failed!", "Delete success!");
  return redirect("/");
};
