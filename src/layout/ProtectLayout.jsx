import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/index.js";
import "react-toastify/dist/ReactToastify.min.css";

export default function ProtectLayout() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ next: location.pathname }} />
  );
}
