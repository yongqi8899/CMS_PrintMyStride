import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import CardImg from "@/components/CardImg";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useOutletContext();
  const product = products.find((product) => product.id === +id);

  const handleDelete = () => {
    navigate(`/products/${id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/products/${id}/update`);
  };

  return (
    <div>
      {product && (
        <>
          <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
              <CardImg
                src={product.image}
                alt={product.title}
                title={product.title}
              />
              <div>
                <h1 className="mb-6 text-5xl font-bold">{product.title}</h1>
                <div className="flex justify-between">
                  <p>{product.title}</p>
                  <p>{product.create_at.split("T")[0]}</p>
                </div>
                <p className="py-6">{product.description}</p>
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
