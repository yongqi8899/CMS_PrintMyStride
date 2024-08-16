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
  const products = useOutletContext();
  const product = products.find((product) => product.id === +id);
  return (
    <Form method="POST">
      <div className="m-auto w-96">
      <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create</h2>
          <label className="flex items-center mt-2 input input-bordered">
            name
            <input
              type="text"
              name="name"
              className="grow"
              placeholder="Please write your name here"
              defaultValue={product.name}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            price
            <input
              type="text"
              name="price"
              className="grow"
              placeholder="Please write your price here"
              defaultValue={product.price}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            order Id
            <input
              type="text"
              name="order Id"
              className="grow"
              placeholder="Please write your order Id here"
              defaultValue={product.orderId}
              required
            />
          </label>
          <select className="w-full mt-2 select select-bordered" defaultValue={product.isPublic}>
            <option disabled selected>
              Should this product public?
            </option>
            <option>ja</option>
            <option>nein</option>
          </select>
          <label className="mt-4 field">
            description
            <textarea
              type="text"
              name="description"
              cols="40"
              rows="10"
              placeholder="Please write description here"
              defaultValue={product.description}
              required
            />
          </label>
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
