import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import CardImg from "@/components/CardImg";

export default function User() {
  const navigate = useNavigate();
  const oder = useLoaderData();

  const handleDelete = () => {
    navigate(`/oders/${oder._id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/oders/${oder._id}/update`);
  };

  return (
    <div>
      {oder && (
        <>
          <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
              <h2 className="card-title">{product.title}</h2>
              <div className="flex justify-between mb-2">
                <p>{product.price}</p>
              </div>
              <div className="flex justify-end w-full gap-6">
                <button className="btn" onClick={handleUpdate}>
                  update
                </button>
                <button className="btn" onClick={handleDelete}>
                  delete
                </button>
                <button className="btn" onClick={() => navigate("/")}>
                  back
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
