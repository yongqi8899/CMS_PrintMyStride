import { useAuth } from "@/context/index.js";
import { memo } from "react";
const Me = memo(() => {
  const { user } = useAuth();
  return (
    user && (
      <div className="max-w-xl m-auto shadow-xl card card-side bg-neutral">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.userName}</h2>
          <p>{user.email}</p>
          <p>{user.role}</p>
          {/* <div className="justify-end card-actions">
          <button className="btn btn-primary">Edit</button>
        </div> */}
        </div>
      </div>
    )
  );
});
export default Me;
