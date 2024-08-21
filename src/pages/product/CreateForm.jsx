import { Form, useNavigation } from "react-router-dom";
import { useAuth } from '@/context';

export default function CreateForm() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const {  user } = useAuth();
  
  return (
    <Form method="POST" encType="multipart/form-data">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create Product</h2>
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            title
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Please write your title here"
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
              required
            />
          </label>
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            image
            <input
              type="text"
              name="image"
              className="grow"
              placeholder="Please write your image here"
              required
            />
          </label>
          {/* <label className="flex items-center gap-2 mt-2 input input-bordered">
            image
            <input
              type="file"
              name="image"
              className="grow"
              placeholder="Please write your image here"
              required
            />
          </label> */}
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
          <select className="w-full gap-2 mt-2 select select-bordered" name="isPublic">
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
