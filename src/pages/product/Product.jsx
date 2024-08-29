import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Img from "@/components/Img.jsx";
import {formatCurrency} from "@/utils";

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
        <div className="flex-wrap items-center m-10 my-10 md:my-20 card card-side w-90vw">
          <div className="md:w-1/2">
            <Img src={product.image} title={product.title} />
          </div>

          <div className="card-body md:w-1/2">
            <h2 className="text-3xl truncate">{product.title}</h2>
            <p className="text-xl text-secondary">
              {formatCurrency(product.price)}{" "}
            </p>
            <p>{product.summary}</p>
            <div className="my-10 ">
              <h3 className="text-2xl font-redressed text-secondary">
                Product Description:
              </h3>
              <div>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="items-center justify-start card-actions">
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
      )}
    </>
  );
}
