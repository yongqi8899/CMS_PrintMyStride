import { Form, useNavigation } from "react-router-dom";
import { useAuth } from "@/context";

export default function CreateForm() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { user } = useAuth();
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create Order</h2>
          <label className="flex items-center hidden mt-2 gap-2 input input-bordered">
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
          <label className="flex items-center mt-2 gap-2 input input-bordered">
            productId
            <input
              type="text"
              name="productId"
              className="grow"
              placeholder="Please write productId here"
              required
            />
          </label>
          <label className="flex items-center mt-2 gap-2 input input-bordered">
            quantity
            <input
              type="text"
              name="quantity"
              className="grow"
              placeholder="Please write quantity here"
              required
            />
          </label>
          <select className="w-full mt-2 gap-2 select select-bordered " name="status">
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

          <button
            type="submit"
            className="bg-green-500 btn hover:bg-green-600"
            disabled={busy}
          >
            {busy ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </Form>
  );
}
