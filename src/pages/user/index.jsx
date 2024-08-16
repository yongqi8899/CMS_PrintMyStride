import { useOutletContext, useNavigate } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Users() {
  const users = useOutletContext();
  const navigate = useNavigate();

  return (
    <div>Users</div>
    // <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
    //   {users &&
    //     users.map((user) => (
    //       <div className="card glass w-1fr" key={user.id}>
    //         <CardImg src={user.cover} alt={user.title} />
    //         <div className="card-body">
    //           <h2 className="card-title">{user.title}</h2>
    //           <div className="flex justify-between mb-2">
    //             <p>{user.author}</p>
    //             <p>{user.create_at.split("T")[0]}</p>
    //           </div>
    //           <div className="justify-end card-actions">
    //             <button
    //               className="btn"
    //               onClick={() => navigate(`/users/${user.id}/update`)}
    //             >
    //               update
    //             </button>
    //             <button
    //               className="btn"
    //               onClick={() => navigate(`/users/${user.id}/delete`)}
    //             >
    //               delete
    //             </button>
    //             <button
    //               className="btn"
    //               onClick={() => navigate(`/users/${user.id}`)}
    //             >
    //               detail
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}
