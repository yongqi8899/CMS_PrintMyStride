import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import CardImg from "@/components/CardImg";

export default function User() {
  const navigate = useNavigate();
  const orders = useLoaderData();

  const { id } = useParams();
  const order = orders.find((order) => order._id === id);

  const handleDelete = () => {
    navigate(`/orders/${order._id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/orders/${order._id}/update`);
  };

  return (
    <>
      {order && (
        <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <div>
              <h2 className="card-title">{order.quantity}</h2>
              <div className="flex justify-between mb-2">
                <p>{order.status}</p>
              </div>
              <div className="flex justify-end w-full gap-6">
                <button className="btn" onClick={handleUpdate}>
                  update
                </button>
                <button className="btn" onClick={handleDelete}>
                  delete
                </button>
                <button className="btn" onClick={() => navigate("/orders")}>
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
