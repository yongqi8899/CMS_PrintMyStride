import { Form, useNavigation } from "react-router-dom";

export default function CreateForm() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create</h2>
          <label className="flex items-center mt-2 input input-bordered">
            user Id
            <input
              type="text"
              name="userId"
              className="grow"
              placeholder="Please write userId here"
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            product Id
            <input
              type="text"
              name="productId"
              className="grow"
              placeholder="Please write productId here"
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
          description
            <input
              type="url"
              name="description"
              className="grow"
              placeholder="Please write description here"
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            quantity
            <input
              type="url"
              name="quantity"
              className="grow"
              placeholder="Please write quantity here"
              required
            />
          </label>
          <select className="w-full mt-2 select select-bordered ">
            <option disabled selected>
              payed
            </option>
            <option>Feet_impression</option>
            <option>3D_Druck</option>
            <option>shoe_shipped</option>
            <option>shoe_delivered</option>
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
