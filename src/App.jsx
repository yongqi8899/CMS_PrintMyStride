import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { getAllUsers } from "@/data/users/loaders.js";
import { getAllProducts } from "@/data/products/loaders.js";
import { getAllOrders, getOneOrder } from "@/data/orders/loaders.js";
import { getAllPayments } from "@/data/payments/loaders.js";

import { createUser, updateUser, deleteUser } from "@/data/users/actions.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/data/products/actions.js";
import {
  createOrder,
  updateOrder,
  deleteOrder,
} from "@/data/orders/actions.js";

import { RootLayout, ProtectLayout } from "@/layout";
import Loading from "@/components/Loading.jsx";

const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
const Dashboard = lazyLoad(() => import("@/pages/dashboard/Dashboard"));
const ErrorPage = lazyLoad(() => import("@/pages/ErrorPage"));
const Login = lazyLoad(() => import("@/pages/Login"));
const Register = lazyLoad(() => import("@/pages/Register"));
const Me = lazyLoad(() => import("@/pages/Me"));
const Home = lazyLoad(() => import("@/pages/Home"));

const Users = lazyLoad(() => import("@/pages/user/index.jsx"));
const User = lazyLoad(() => import("@/pages/user/User"));
const UpdateUserForm = lazyLoad(() => import("@/pages/user/UpdateForm"));
const CreateUserForm = lazyLoad(() => import("@/pages/user/CreateForm"));
const DeleteUserForm = lazyLoad(() => import("@/pages/user/DeleteForm"));

const Products = lazyLoad(() => import("@/pages/product/index.jsx"));
const Product = lazyLoad(() => import("@/pages/product/Product"));
const UpdateProductForm = lazyLoad(() => import("@/pages/product/UpdateForm"));
const CreateProductForm = lazyLoad(() => import("@/pages/product/CreateForm"));
const DeleteProductForm = lazyLoad(() => import("@/pages/product/DeleteForm"));

const Orders = lazyLoad(() => import("@/pages/order/index.jsx"));
const Order = lazyLoad(() => import("@/pages/order/Order"));
const UpdateOrderForm = lazyLoad(() => import("@/pages/order/UpdateForm"));
const CreateOrderForm = lazyLoad(() => import("@/pages/order/CreateForm"));
const DeleteOrderForm = lazyLoad(() => import("@/pages/order/DeleteForm"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          index: "",
          element: <ProtectLayout />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
              loader: async () => {
                const users = await getAllUsers();
                const products = await getAllProducts();
                const orders = await getAllOrders();
                return { users, products, orders };
              },
            },
            {
              path: "/me",
              element: <Me />,
            },
            {
              path: "/users",
              element: <Users />,
              loader: getAllUsers,
            },
            {
              path: "/users/:id",
              element: <User />,
              loader: getAllUsers,
            },
            {
              path: "/users/:id/update",
              element: <UpdateUserForm />,
              action: updateUser,
              loader: getAllUsers,
            },
            {
              path: "/users/create",
              element: <CreateUserForm />,
              action: createUser,
            },
            {
              path: "/users/:id/delete",
              element: <DeleteUserForm />,
              action: deleteUser,
              loader: getAllUsers,
            },
            {
              path: "/products",
              element: <Products />,
              loader: getAllProducts,
            },
            {
              path: "/products/:id",
              element: <Product />,
              loader: getAllProducts,
            },
            {
              path: "/products/:id/update",
              element: <UpdateProductForm />,
              action: updateProduct,
              loader: getAllProducts,
            },
            {
              path: "/products/create",
              element: <CreateProductForm />,
              action: createProduct,
            },
            {
              path: "/products/:id/delete",
              element: <DeleteProductForm />,
              action: deleteProduct,
              loader: getAllProducts,
            },
            {
              path: "/orders",
              element: <Orders />,
              loader: getAllOrders,
            },
            {
              path: "/orders/:id",
              element: <Order />,
              loader: async ({ params }) => {
                const order = await getOneOrder(params.id);
                const payments = await getAllPayments();
                return { order, payments };
              },
            },
            {
              path: "/orders/:id/update",
              element: <UpdateOrderForm />,
              action: updateOrder,
              loader: getAllOrders,
            },
            {
              path: "/orders/create",
              element: <CreateOrderForm />,
              action: createOrder,
            },
            {
              path: "/orders/:id/delete",
              element: <DeleteOrderForm />,
              action: deleteOrder,
              loader: getAllOrders,
            },
          ],
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
