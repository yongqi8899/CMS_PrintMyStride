import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import CardImg from "@/components/CardImg";

export default function User() {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useOutletContext();
  const product = users.find((product) => product.id === +id);

  const handleDelete = () => {
    navigate(`/users/${id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/users/${id}/update`);
  };

  return (
    <div>
      {product && (
        <>
          <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
              <CardImg
                src={product.cover}
                alt={product.title}
                title={product.title}
              />
              <div>
                <h1 className="mb-6 text-5xl font-bold">{product.title}</h1>
                <div className="flex justify-between">
                  <p>{product.author}</p>
                  <p>{product.create_at.split("T")[0]}</p>
                </div>
                <p className="py-6">{product.content}</p>
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
          </div>
        </>
      )}
    </div>
  );
}
