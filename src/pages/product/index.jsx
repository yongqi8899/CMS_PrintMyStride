import { useOutletContext, useNavigate } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Products() {
  const products = useOutletContext();
  const navigate = useNavigate();
console.log("products",products);
  return (
    <div>
      {products.map((product) => (
        <div className="card glass w-1fr" key={product.id}>
          <CardImg src={product.image} alt={product.title} />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <div className="flex justify-between mb-2">
              <p>{product.price}</p>
              <p>{product.create_at.split("T")[0]}</p>
            </div>
            <div className="justify-end card-actions">
              <button
                className="btn"
                onClick={() => navigate(`/products/${product.id}/update`)}
              >
                update
              </button>
              <button
                className="btn"
                onClick={() => navigate(`/products/${product.id}/delete`)}
              >
                delete
              </button>
              <button
                className="btn"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                detail
              </button>
            </div>
          </div>
        </div>
      ))}
      <button className="btn" onClick={() => navigate(`/products/create`)}>
        +
      </button>
    </div>
  );
}
