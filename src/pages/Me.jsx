import { useAuth } from "@/context/index.js";

export default function Me() {
  const { user } = useAuth();
  return (
    user && (
      <div className="card card-side bg-neutral shadow-xl max-w-xl m-auto">
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
          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
        </div> */}
        </div>
      </div>
    )
  );
}
