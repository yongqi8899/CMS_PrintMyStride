import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context";

export default function Me() {
    const navigate = useNavigate();
    const {user} = useAuth();
  return (
    <div className="max-w-md m-auto shadow-xl card card-side bg-base-100">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.userName}</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary" onClick={() => navigate(`/users/${user._id}/update`)}>Edit</button>
        </div>
      </div>
    </div>
  );
}
