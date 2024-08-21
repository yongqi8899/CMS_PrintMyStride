import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useLoaderData,
} from "react-router-dom";
import { useAuth } from '@/context';

export default function UpdateForm() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { id } = useParams();
  const orders = useLoaderData();
  const order = orders.find((order) => order._id === id);  
  const {  user } = useAuth();
  
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Update Order</h2>
          <label className="flex items-center hidden mt-2 input input-bordered">
            user id
            <input
              type="text"
              name="userId"
              className="grow"
              placeholder="Please write your userId here"
              defaultValue={user._id}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            productId
            <input
              type="text"
              name="productId"
              className="grow"
              placeholder="Please write productId here"
              defaultValue={order.productId}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            quantity
            <input
              type="text"
              name="quantity"
              className="grow"
              placeholder="Please write quantity here"
              defaultValue={order.quantity}
              required
            />
          </label>
          <select className="w-full mt-2 select select-bordered " name="status"  defaultValue={order.status}>
            <option  value="payed">
              payed
            </option>
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
