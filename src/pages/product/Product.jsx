import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import CardImg from "@/components/CardImg";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useLoaderData();
  const product = products.find((product) => product._id === id);

  const handleDelete = () => {
    navigate(`/products/${id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/products/${id}/update`);
  };

  return (
    <>
      {product && (
        <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <div>
              <CardImg src={product.image} alt={product.title} />
              <h2 className="card-title">{product.title}</h2>
              <div className="flex justify-between mb-2">
                <p>{product.price}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>{product.summary}</p>
              </div>
              <p className="py-6">{product.description}</p>
              <div className="flex justify-end w-full gap-6">
                <button className="btn" onClick={handleUpdate}>
                  update
                </button>
                <button className="btn" onClick={handleDelete}>
                  delete
                </button>
                <button className="btn" onClick={() => navigate("/products")}>
                  back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
