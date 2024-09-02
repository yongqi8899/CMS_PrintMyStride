import { useNavigate, useLoaderData } from "react-router-dom";
import { flattenObject, formatDate } from "@/utils";

export default function Oders() {
  const ordersData = useLoaderData();
  const orders = ordersData.map((data) => flattenObject(data));
  const path = "orders";
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Username</th>
            <th>Order Date</th>
            <th>status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="font-bold">{order["userId.userName"]}</div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  {formatDate(order.orderDate)}
                </span>
              </td>
              <td className="align-middle">
                <span className="badge badge-secondary">{order.status}</span>
              </td>
              <td>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => navigate(`/${path}/${order._id}/update`)}
                >
                  update
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => navigate(`/${path}/${order._id}/delete`)}
                >
                  delete
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => navigate(`/${path}/${order._id}`)}
                >
                  details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
