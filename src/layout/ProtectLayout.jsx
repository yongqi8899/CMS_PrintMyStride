import { Navigate, Outlet, useLocation } from "react-router-dom";
import {memo} from "react";
import { useAuth } from "@/context/index.js";
import "react-toastify/dist/ReactToastify.min.css";

const ProtectLayout = memo(()=> {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ next: location.pathname }} />
  );
})
export default ProtectLayout;