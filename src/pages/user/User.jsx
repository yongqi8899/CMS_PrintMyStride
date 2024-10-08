import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { memo } from "react";
const User = memo(() => {
  const navigate = useNavigate();
  const users = useLoaderData();
  const { id } = useParams();

  const user = users.find((user) => user._id === id);
  const handleDelete = () => {
    navigate(`/users/${id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/users/${id}/update`);
  };

  return (
    <div>
      {user && (
        <>
          <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
              <div>
                <h2 className="card-title">{user.userName}</h2>
                <div className="flex justify-between mb-2">
                  <p>{user.createdAt.split("T")[0]}</p>
                  <p>{user.role}</p>
                </div>
                <div className="flex justify-end w-full gap-6">
                  <button className="btn" onClick={handleUpdate}>
                    update
                  </button>
                  <button className="btn" onClick={handleDelete}>
                    delete
                  </button>
                  <button className="btn" onClick={() => navigate("/users")}>
                    back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
});
export default User;
