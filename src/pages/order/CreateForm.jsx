import { Form, useNavigation } from "react-router-dom";
import { memo } from "react";
import { useAuth } from "@/context";

const CreateForm = memo(() =>{
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { user } = useAuth();
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create Order</h2>
          <label className="flex items-center hidden gap-2 mt-2 input input-bordered">
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
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            productId
            <input
              type="text"
              name="productId"
              className="grow"
              placeholder="Please write productId here"
              required
            />
          </label>
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            quantity
            <input
              type="text"
              name="quantity"
              className="grow"
              placeholder="Please write quantity here"
              required
            />
          </label>
          <select className="w-full gap-2 mt-2 select select-bordered " name="status">
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

          <button
            type="submit"
            className="btn btn-gradient-blue"
            disabled={busy}
          >
            {busy ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </Form>
  );
})
export default CreateForm;