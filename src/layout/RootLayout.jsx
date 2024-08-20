import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthContextProvider } from "../context";
import { useLoaderData } from "react-router-dom";
import { getAllProducts } from "../data/products/loaders";
export default function RootLayout() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      <AuthContextProvider>
        <Header />
        <Outlet />
        <Footer />
        <Drawer />
      </AuthContextProvider>
    </div>
  );
}
