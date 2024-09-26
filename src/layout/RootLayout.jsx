import { Outlet } from "react-router-dom";
import {memo} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthContextProvider } from "../context";

const RootLayout= memo(() =>{
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      <AuthContextProvider>
        <Header />
        <div className="w-full !my-24 !m-auto">
          <Outlet />
        </div>
        <Footer />
        <Drawer />
      </AuthContextProvider>
    </div>
  );
})
export default RootLayout;