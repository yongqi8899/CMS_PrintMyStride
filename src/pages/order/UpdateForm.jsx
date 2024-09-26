import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useLoaderData,
} from "react-router-dom";
import {memo} from "react";
const UpdateForm =  memo(() =>{
  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { id } = useParams();
  const orders = useLoaderData();
  const order = orders.find((order) => order._id === id);

  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Update Order</h2>
          <label className="flex items-center hidden gap-2 mt-2 input input-bordered">
            user id
            <input
              type="text"
              name="userId"
              className="grow"
              placeholder="Please write your userId here"
              defaultValue={order.userId._id}
              required
            />
          </label>
          <label className="flex items-center hidden gap-2 mt-2 input input-bordered">
            product Id
            <input
              type="text"
              name="products"
              className="grow"
              placeholder="Please write productId here"
              defaultValue={JSON.stringify(order.products)}
              required
            />
          </label>
          <select
            className="w-full gap-2 mt-2 select select-bordered "
            name="status"
            defaultValue={order.status}
          >
            <option value="payed">Payed</option>
            <option value="feet_impression">Feet Impression</option>
            <option value="3D_Druck">3D Druck</option>
            <option value="shoe_shipped">Shoe Shipped</option>
            <option value="shoe_delivered">Shoe Delivered</option>
          </select>
        </fieldset>
        <div className="justify-end card-actions">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="btn btn-gradient-blue">
            {busy ? "Updating" : "Update"}
          </button>
        </div>
      </div>
    </Form>
  );
})
export default UpdateForm;