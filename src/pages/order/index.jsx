import { useOutletContext, useNavigate, useLoaderData } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Oders() {
  const oders = useLoaderData();
  const navigate = useNavigate();
  console.log("oders", oders);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      <button className="btn" onClick={() => navigate(`/orders/create`)}>
        +
      </button>
      {oders &&
        oders.map((oder) => (
          <div className="card glass w-1fr" key={oder._id}>
            <div className="card-body">
                <p>{oder.quantity}</p>
              <div className="flex justify-between mb-2">
                <p>{oder.status}</p>
                <p>{oder.orderDate.split("T")[0]}</p>
              </div>
              <div className="justify-end card-actions">
                <button
                  className="btn"
                  onClick={() => navigate(`/oders/${oder.id}/update`)}
                >
                  update
                </button>
                <button
                  className="btn"
                  onClick={() => navigate(`/oders/${oder.id}/delete`)}
                >
                  delete
                </button>
                <button
                  className="btn"
                  onClick={() => navigate(`/oders/${oder.id}`)}
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
