import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { getAllUsers, getOneUser } from "./data/users/loaders.js";
import { getAllProducts, getOneProduct } from "./data/products/loaders.js";
import { getAllOrders, getOneOrder } from "./data/orders/loaders.js";

import { createUser, updateUser, deleteUser } from "./data/users/actions.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "./data/products/actions.js";
import {
  createOrder,
  updateOrder,
  deleteOrder,
} from "./data/orders/actions.js";

import { RootLayout, ProtectLayout } from "@/layout";
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
        {
          path: "/users",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <Users />
              </Suspense>
            </ProtectLayout>
          ),
          loader: getAllUsers,
        },
        {
          path: "/users/:id",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <User />
              </Suspense>
            </ProtectLayout>
          ),
        },
        {
          path: "/users/:id/update",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <UpdateUserForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: updateUser,
        },
        {
          path: "/users/create",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <CreateUserForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: createUser,
        },
        {
          path: "/users/:id/delete",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <DeleteUserForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: deleteUser,
        },
        {
          path: "/products",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <Products />
              </Suspense>
            </ProtectLayout>
          ),
          loader: getAllProducts,
        },
        {
          path: "/products/:id",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <Product />
              </Suspense>
            </ProtectLayout>
          ),
        },
        {
          path: "/products/:id/update",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <UpdateProductForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: updateProduct,
        },
        {
          path: "/products/create",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <CreateProductForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: createProduct,
        },
        {
          path: "/products/:id/delete",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <DeleteProductForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: deleteProduct,
        },
        {
          path: "/orders",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <Orders />
              </Suspense>
            </ProtectLayout>
          ),
          loader: getAllOrders,
        },
        {
          path: "/orders/:id",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <Order />
              </Suspense>
            </ProtectLayout>
          ),
        },
        {
          path: "/orders/:id/update",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <UpdateOrderForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: updateOrder,
        },
        {
          path: "/orders/create",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <CreateOrderForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: createOrder,
        },
        {
          path: "/orders/:id/delete",
          element: (
            <ProtectLayout>
              <Suspense fallback={<Loading />}>
                <DeleteOrderForm />
              </Suspense>
            </ProtectLayout>
          ),
          action: deleteOrder,
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
