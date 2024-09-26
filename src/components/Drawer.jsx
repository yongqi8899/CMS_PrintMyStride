import { NavLink, useNavigate } from "react-router-dom";
import {memo} from "react";

const Drawer =  memo(() => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full p-4 mt-20 menu w-60 bg-neutral">
          {/* Sidebar content here */}
          <li>
            {" "}
            <NavLink to="/dashboard" className="text-xl btn btn-ghost">
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
})
export default Drawer;