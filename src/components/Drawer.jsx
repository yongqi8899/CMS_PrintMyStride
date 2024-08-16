import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Drawer() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          &gt;
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full p-4 menu bg-base-200 text-base-content w-80">
          {/* Sidebar content here */}
          <li>
            {" "}
            <NavLink to="/" className="text-xl btn btn-ghost">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="text-xl btn btn-ghost">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="text-xl btn btn-ghost">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className="text-xl btn btn-ghost">
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
