import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// Data loaders
import { getAllUsers } from "@/data/users/loaders.js";
import { getAllProducts } from "@/data/products/loaders.js";
import { getAllOrders, getOneOrder } from "@/data/orders/loaders.js";
import { getAllPayments } from "@/data/payments/loaders.js";

// Data actions
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

// Layouts
import { RootLayout, ProtectLayout } from "@/layout";
import Loading from "@/components/Loading.jsx";

// lazyLoad
const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        // Public Routes
        {
          path: "/",
          element: lazyLoad(() => import("@/pages/Home"))(),
        },
        {
          path: "/login",
          element: lazyLoad(() => import("@/pages/Login"))(),
        },
        {
          path: "/register",
          element: lazyLoad(() => import("@/pages/Register"))(),
        },

        // Protected Routes
        {
          element: <ProtectLayout />,
          children: [
            // Dashboard
            {
              path: "/dashboard",
              element: lazyLoad(() => import("@/pages/dashboard/Dashboard"))(),
              loader: async () => {
                try {
                  const [users, products, orders] = await Promise.all([
                    getAllUsers(),
                    getAllProducts(),
                    getAllOrders(),
                  ]);
                  return { users, products, orders };
                } catch (error) {
                  console.error(error);
                }
              },
            },
            {
              path: "/me",
              element: lazyLoad(() => import("@/pages/Me"))(),
            },

            // Users
            {
              path: "/users",
              element: lazyLoad(() => import("@/pages/user/index.jsx"))(),
              loader: getAllUsers,
            },
            {
              path: "/users/:id",
              element: lazyLoad(() => import("@/pages/user/User"))(),
              loader: getAllUsers,
            },
            {
              path: "/users/:id/update",
              element: lazyLoad(() => import("@/pages/user/UpdateForm"))(),
              action: updateUser,
              loader: getAllUsers,
            },
            {
              path: "/users/create",
              element: lazyLoad(() => import("@/pages/user/CreateForm"))(),
              action: createUser,
            },
            {
              path: "/users/:id/delete",
              element: lazyLoad(() => import("@/pages/user/DeleteForm"))(),
              action: deleteUser,
              loader: getAllUsers,
            },

            // Products
            {
              path: "/products",
              element: lazyLoad(() => import("@/pages/product/index.jsx"))(),
              loader: getAllProducts,
            },
            {
              path: "/products/:id",
              element: lazyLoad(() => import("@/pages/product/Product"))(),
              loader: getAllProducts,
            },
            {
              path: "/products/:id/update",
              element: lazyLoad(() => import("@/pages/product/UpdateForm"))(),
              action: updateProduct,
              loader: getAllProducts,
            },
            {
              path: "/products/create",
              element: lazyLoad(() => import("@/pages/product/CreateForm"))(),
              action: createProduct,
            },
            {
              path: "/products/:id/delete",
              element: lazyLoad(() => import("@/pages/product/DeleteForm"))(),
              action: deleteProduct,
              loader: getAllProducts,
            },

            // Orders
            {
              path: "/orders",
              element: lazyLoad(() => import("@/pages/order/index.jsx"))(),
              loader: getAllOrders,
            },
            {
              path: "/orders/:id",
              element: lazyLoad(() => import("@/pages/order/Order"))(),
              loader: async ({ params }) => ({
                order: await getOneOrder(params.id),
                payments: await getAllPayments(),
              }),
            },
            {
              path: "/orders/:id/update",
              element: lazyLoad(() => import("@/pages/order/UpdateForm"))(),
              action: updateOrder,
              loader: getAllOrders,
            },
            {
              path: "/orders/create",
              element: lazyLoad(() => import("@/pages/order/CreateForm"))(),
              action: createOrder,
            },
            {
              path: "/orders/:id/delete",
              element: lazyLoad(() => import("@/pages/order/DeleteForm"))(),
              action: deleteOrder,
              loader: getAllOrders,
            },
          ],
        },
      ],
      errorElement: lazyLoad(() => import("@/pages/ErrorPage"))(),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
