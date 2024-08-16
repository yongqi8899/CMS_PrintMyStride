import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Header() {
  const detailsRef = useRef(null);

  const closeDetails = () => {
    detailsRef.current.removeAttribute("open");
  };

  const itAuth = false;
  return (
    <header className="sticky top-0 flex text-gray-700 align-middle bg-primary navbar bold">
      <div className="flex-1">
        <NavLink to="/" className="text-xl btn btn-ghost">
          Logo
        </NavLink>
      </div>
      <nav className="flex-none">
        <ul className="flex gap-8 mr-6">
          {itAuth ? (
            <li>
              <details
                ref={detailsRef}
                className="flex items-center bg-primary"
              >
                <summary>Login</summary>
                <ul className="p-2 rounded-t-none bg-primary">
                  <li>
                    <NavLink to="/login" onClick={closeDetails}>
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" onClick={closeDetails}>
                      Register
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          ) : (
            <li>
              <details
                ref={detailsRef}
                className="flex items-center bg-primary"
              >
                <summary className="flex items-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=82751&format=png&color=000000"
                    className="w-6"
                  />
                </summary>
                <ul className="flex flex-col p-2 rounded-t-none bg-primary">
                  <li>
                    <NavLink to="/login" onClick={closeDetails}>
                      <p> Me</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" onClick={closeDetails}>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
