import { useNavigate, useLoaderData } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Products() {
  const products = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 justify-items-center">
      <button className="btn" onClick={() => navigate(`/products/create`)}>
        +
      </button>
      {products.map((product) => (
        <div className="card glass w-1fr" key={product._id}>
          <CardImg src={product.image} alt={product.title} />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <div className="flex justify-between mb-2">
              <p>{product.price}</p>
            </div>
            <div className="justify-end card-actions">
              <button
                className="btn"
                onClick={() => navigate(`/products/${product._id}/update`)}
              >
                update
              </button>
              <button
                className="btn"
                onClick={() => navigate(`/products/${product._id}/delete`)}
              >
                delete
              </button>
              <button
                className="btn"
                onClick={() => navigate(`/products/${product._id}`)}
              >
                detail
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
