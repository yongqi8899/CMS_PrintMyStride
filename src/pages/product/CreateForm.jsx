import { Form, useNavigation } from "react-router-dom";

export default function CreateForm() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create Product</h2>
          <label className="flex items-center mt-2 input input-bordered">
            title
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Please write your title here"
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
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            image
            <input
              type="url"
              name="image"
              className="grow"
              placeholder="Please write your image here"
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            user id
            <input
              type="text"
              name="userId"
              className="grow"
              placeholder="Please write your userId here"
              required
            />
          </label>
          <select className="w-full mt-2 select select-bordered">
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
              required
            />
          </label>
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
