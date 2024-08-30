import { useNavigate, useLoaderData } from "react-router-dom";
import { flattenObject, formatDate } from "@/utils";

export default function Oders() {
  const ordersData = useLoaderData();
  const orders = ordersData.map((data) => flattenObject(data));
  const path = "orders";
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Order Date</th>
                <th>status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      {/* <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div> */}
                      <div>
                        <div className="font-bold">{order["userId.userName"]}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {formatDate(order.orderDate)}
                    </span>
                  </td>
                  <td>{order.status}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs"  onClick={() => navigate(`/${path}/${order._id}/update`)}>update</button>
                    <button className="btn btn-ghost btn-xs"  onClick={() => navigate(`/${path}/${order._id}/delete`)}>delete</button>
                    <button className="btn btn-ghost btn-xs"  onClick={() => navigate(`/${path}/${order._id}`)}>details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
