import {useNavigate, useLoaderData } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Users() {
  const users = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <button className="btn" onClick={() => navigate(`/users/create`)}>
        +
      </button>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {users &&
          users.map((user) => (
            <div className="card glass w-1fr" key={user._id}>
              <div className="card-body">
                <h2 className="card-title">{user.userName}</h2>
                <div className="flex justify-between mb-2">
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>{user.createdAt.split("T")[0]}</p>
                  <p>{user.role}</p>
                </div>
                <div className="justify-end card-actions">
                  <button
                    className="btn"
                    onClick={() => navigate(`/users/${user.id}/update`)}
                  >
                    update
                  </button>
                  <button
                    className="btn"
                    onClick={() => navigate(`/users/${user.id}/delete`)}
                  >
                    delete
                  </button>
                  <button
                    className="btn"
                    onClick={() => navigate(`/users/${user.id}`)}
                  >
                    detail
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
