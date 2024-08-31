import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useLoaderData,
} from "react-router-dom";

export default function UpdateForm() {
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
          <label className="flex items-center gap-2 mt-2 input input-bordered hidden">
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
            <option value="payed">payed</option>
            <option value="feet_impression">Feet_impression</option>
            <option value="3D_Druck">3D_Druck</option>
            <option value="shoe_shipped">shoe_shipped</option>
            <option value="shoe_delivered">shoe_delivered</option>
          </select>
        </fieldset>
        <div className="justify-end card-actions">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="bg-green-500 btn hover:bg-green-600">
            {busy ? "Updating" : "Update"}
          </button>
        </div>
      </div>
    </Form>
  );
}
