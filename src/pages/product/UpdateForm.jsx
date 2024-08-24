import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useLoaderData,
} from "react-router-dom";
import { useAuth } from "@/context";

export default function UpdateForm() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { id } = useParams();
  const products = useLoaderData();
  const product = products.find((product) => product._id === id);
  const { user } = useAuth();

  return (
    <Form method="POST">
      <div className="m-auto w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Update Product</h2>
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            title
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Please write your title here"
              defaultValue={product.title}
              required
            />
          </label>
          <label className="flex items-center gap-2 mt-2 input input-bordered">
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
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            summary
            <input
              type="text"
              name="summary"
              className="grow"
              placeholder="Please write your summary here"
              defaultValue={product.summary}
              required
            />
          </label>
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            image
            <input
              type="url"
              name="image"
              className="grow"
              placeholder="Please write your image here"
              defaultValue={product.image}
              required
            />
          </label>
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
          <select
            className="w-full gap-2 mt-2 select select-bordered"
            name="isPublic"
            defaultValue={product.isPublic}
          >
            <option value="true">Public</option>
            <option value="false">Private</option>
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
