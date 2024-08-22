import { redirect } from "react-router-dom";
import { showToast } from "@/utils/index";

export const createUser = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const { confirmPassword, ...filteredData } = data;
  const formData = {
    ...filteredData
  };
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });
  showToast(res, "create failed!", "create success!");
  return redirect("/users");
};

export const updateUser = async ({ params, request }) => {
  const id = params.id;
  const data = Object.fromEntries(await request.formData());
  const { confirmPassword, ...filteredData } = data;
  const formData = {
    ...filteredData
  };
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });
  showToast(res, "update failed!", "update success!");
  return redirect(`/users/${id}`);
};

export const deleteUser = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  showToast(res, "Delete failed!", "Delete success!");
  return redirect("/users");
};
