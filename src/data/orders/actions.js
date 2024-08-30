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
  return redirect("/orders");
};

export const updateOrder = async ({ params, request}) => {
  const id = params.id;
  const formData = Object.fromEntries(await request.formData());

  if (formData.products) {
    formData.products = JSON.parse(formData.products).map(product => {
      const { _id, ...rest } = product;
      return {
        ...rest,
        productId: product.productId._id 
      };
    });
  }
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${id}`, {
    method: "PUT",

    credentials: "include",
    headers: {
      'Content-Type': 'application/json',  
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error("An Error occured while paying");
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  showToast(res, "Update failed!", "Update success!");
  return data;
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
  return redirect("/orders");
};
