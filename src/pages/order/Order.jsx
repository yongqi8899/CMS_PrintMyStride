import { useNavigate, useLoaderData } from "react-router-dom";
import {memo} from "react";
import { formatDate } from "@/utils";

const Order =  memo(() => {
  const navigate = useNavigate();
  const data = useLoaderData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { order, payments } = data;
  const paymentInfo = payments.find(
    (payment) => payment.orderId._id === order._id
  );
  return (
    <>
      {order && (
        <div className="flex flex-col items-center justify-center gap-10">
          <div>
            <span className="inline-block mb-4 text-xl">Order Info:</span>

            <div className="flex flex-col gap-4 p-4 align-middle border-2 md:flex-row border-base-200 rounded-xl">
              <div>
                <span className="text-primary">Order Id:</span>{" "}
                <span>{order._id}</span>
              </div>
              <div>
                <span className="text-primary">status:</span>{" "}
                <span className="badge badge-secondary">{order.status}</span>
              </div>
              <div>
                <span className="text-primary">Order Date:</span>{" "}
                <span>{formatDate(order.orderDate)}</span>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block mb-4 text-xl">User Info:</span>
            <div className="flex flex-col gap-4 p-4 align-middle border-2 md:flex-row border-base-200 rounded-xl">
              <div>
                <span className="text-primary">User Id:</span>{" "}
                <span>{order.userId._id}</span>
              </div>
              <div>
                <span className="text-primary">User Name:</span>{" "}
                <span>{order.userId.userName}</span>
              </div>
              <div>
                <span className="text-primary">Eamil:</span>{" "}
                <span>{order.userId.email}</span>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block mb-4 text-xl">Ordered Product:</span>
            <div className="flex gap-4 p-6 align-middle border-2 border-base-200 rounded-xl">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.productId._id}</td>
                      <td>
                        <div className="mx-auto h-28 w-28">
                          <img
                            src={product.productId.image}
                            alt={product.productId.title}
                          />
                        </div>
                      </td>
                      <td> {product.productId.title}</td>
                      <td>{product.productId.price}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center gap-6 mt-6">
        <button
          className="btn btn-gradient-blue"
          onClick={() => navigate(`/orders/${order._id}/update`)}
        >
          Edit
        </button>
        <button
          className="btn btn-gradient-blue"
          onClick={() => navigate(`/orders/${order._id}/delete`)}
        >
          delete
        </button>
        <button
          className="btn btn-gradient-blue"
          onClick={() => navigate("/orders")}
        >
          Go Back
        </button>
      </div>
    </>
  );
})
export default Order;