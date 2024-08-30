import { useNavigate, useLoaderData } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Oders() {
  const orders = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <button className="btn" onClick={() => navigate(`/orders/create`)}>
        +
      </button>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {orders &&
          orders.map((order) => (
            <div className="card glass w-1fr" key={order._id}>
              <div className="card-body">
                <p>{order.quantity}</p>
                <div className="flex justify-between mb-2">
                  <p>{order.status}</p>
                  <p>{order.orderDate.split("T")[0]}</p>
                </div>
                <div className="justify-end card-actions">
                  <button
                    className="btn"
                    onClick={() => navigate(`/orders/${order._id}/update`)}
                  >
                    update
                  </button>
                  <button
                    className="btn"
                    onClick={() => navigate(`/orders/${order._id}/delete`)}
                  >
                    delete
                  </button>
                  <button
                    className="btn"
                    onClick={() => navigate(`/orders/${order._id}`)}
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
