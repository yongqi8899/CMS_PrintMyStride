import { Link, useNavigate, redirect } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "@/context/index.js";

export default function Header() {
  const { isAuthenticated, logout} = useAuth();
  const detailsRef = useRef(null);
  const navigate = useNavigate();

  const closeDetails = () => {
    detailsRef.current.removeAttribute("open");
  };
  // const handleLogout = () => {
  //   logout();
  //   closeDetails();
  //   navigate("/login");
  // };

  return (
    <header className="sticky top-0 flex text-gray-700 align-middle bg-primary navbar bold">
      <div className="flex-1">
        <Link to="/" className="text-xl btn btn-ghost">
          Logo
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="flex gap-8 mr-6">
          {isAuthenticated ? (
            <details ref={detailsRef} className="flex items-center bg-primary">
              <summary className="flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=82751&format=png&color=000000"
                  className="w-6"
                />
              </summary>
              <Link to="/me" onClick={closeDetails}>
                <p> Me</p>
              </Link>
              <Link onClick={logout}>Logout</Link>
            </details>
          ) : (
            <details ref={detailsRef} className="flex items-center bg-primary">
              <summary>Login</summary>
              <Link to="/login" onClick={closeDetails}>
                Login
              </Link>
              <Link to="/register" onClick={closeDetails}>
                Register
              </Link>
            </details>
          )}
        </ul>
      </nav>
    </header>
  );
}
