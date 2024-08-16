import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { getAllUsers } from "./data/users/loaders.js";

import { createUser, updateUser, deleteUser } from "./data/users/actions.js";
import { createProduct, updateProduct, deleteProduct } from "./data/products/actions.js";
import { createOrder, updateOrder, deleteOrder } from "./data/orders/actions.js";

import { RootLayout } from "@/layout";
import Loading from "./components/Loading.jsx";

const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));

const Users = lazy(() => import("@/pages/user/index.jsx"));
const User = lazy(() => import("@/pages/user/User"));
const UpdateUserForm = lazy(() => import("@/pages/user/UpdateForm"));
const CreateUserForm = lazy(() => import("@/pages/user/CreateForm"));
const DeleteUserForm = lazy(() => import("@/pages/user/DeleteForm"));

const Products = lazy(() => import("@/pages/product/index.jsx"));
const Product = lazy(() => import("@/pages/product/Product"));
const UpdateProductForm = lazy(() => import("@/pages/product/UpdateForm"));
const CreateProductForm = lazy(() => import("@/pages/product/CreateForm"));
const DeleteProductForm = lazy(() => import("@/pages/product/DeleteForm"));

const Orders = lazy(() => import("@/pages/order/index.jsx"));
const Order = lazy(() => import("@/pages/order/Order"));
const UpdateOrderForm = lazy(() => import("@/pages/order/UpdateForm"));
const CreateOrderForm = lazy(() => import("@/pages/order/CreateForm"));
const DeleteOrderForm = lazy(() => import("@/pages/order/DeleteForm"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          ),
        },
        {
          path: "/users",
          element: (
            <Suspense fallback={<Loading />}>
              <Users />
            </Suspense>
          ),
          children: [
            {
              path: "/users/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <User />
                </Suspense>
              ),
            },
            {
              path: "/users/:id/update",
              element: (
                <Suspense fallback={<Loading />}>
                  <UpdateUserForm />
                </Suspense>
              ),
              action: updateUser,
            },
            {
              path: "/users/create",
              element: (
                <Suspense fallback={<Loading />}>
                  <CreateUserForm />
                </Suspense>
              ),
              action: createUser,
            },
            {
              path: "/users/:id/delete",
              element: (
                <Suspense fallback={<Loading />}>
                  <DeleteUserForm />
                </Suspense>
              ),
              action: deleteUser,
            },
          ],
        },
        {
          path: "/products",
          element: (
            <Suspense fallback={<Loading />}>
              <Products />
            </Suspense>
          ),
          children: [
            {
              path: "/products/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <Product />
                </Suspense>
              ),
            },
            {
              path: "/products/:id/update",
              element: (
                <Suspense fallback={<Loading />}>
                  <UpdateProductForm />
                </Suspense>
              ),
              action: updateProduct,
            },
            {
              path: "/products/create",
              element: (
                <Suspense fallback={<Loading />}>
                  <CreateProductForm />
                </Suspense>
              ),
              action: createProduct,
            },
            {
              path: "/products/:id/delete",
              element: (
                <Suspense fallback={<Loading />}>
                  <DeleteProductForm />
                </Suspense>
              ),
              action: deleteProduct,
            },
          ],
        },
        {
          path: "/orders",
          element: (
            <Suspense fallback={<Loading />}>
              <Orders />
            </Suspense>
          ),
          children: [
            {
              path: "/orders/:id",
              element: (
                <Suspense fallback={<Loading />}>
                  <Order />
                </Suspense>
              ),
            },
            {
              path: "/orders/:id/update",
              element: (
                <Suspense fallback={<Loading />}>
                  <UpdateOrderForm />
                </Suspense>
              ),
              action: updateOrder,
            },
            {
              path: "/orders/create",
              element: (
                <Suspense fallback={<Loading />}>
                  <CreateOrderForm />
                </Suspense>
              ),
              action: createOrder,
            },
            {
              path: "/orders/:id/delete",
              element: (
                <Suspense fallback={<Loading />}>
                  <DeleteOrderForm />
                </Suspense>
              ),
              action: deleteOrder,
            },
          ],
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          ),
        },
      ],
      errorElement: (
        <Suspense fallback={<Loading />}>
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
