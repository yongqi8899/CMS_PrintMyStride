import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useOutletContext,
} from "react-router-dom";

export default function UpdateForm() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { id } = useParams();
  const oders = useOutletContext();
  const order = oders.find((oder) => oder.id === +id);
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create</h2>
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
          <select
            className="w-full mt-2 select select-bordered "
            defaultValue={order.status}
          >
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
          <button className="bg-green-500 btn hover:bg-green-600">
            {busy ? "Updating" : "Update"}
          </button>
        </div>
      </div>
    </Form>
  );
}
