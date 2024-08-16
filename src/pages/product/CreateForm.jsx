import { Form, useNavigation } from "react-router-dom";

export default function CreateForm() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create</h2>
          <label className="flex items-center gap-2 input input-bordered">
            username
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Please write your username here"
              required
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            firstName
            <input
              type="text"
              name="firstName"
              className="grow"
              placeholder="Please write your firstName here"
              required
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            lastName
            <input
              type="text"
              name="lastName"
              className="grow"
              placeholder="Please write your lastName here"
              required
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            email
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Please write email here"
              required
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            password
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Please write password url here"
              required
            />
          </label>
          <select className="w-full max-w-xs select select-bordered">
            <option disabled selected>
              Who shot first?
            </option>
            <option>User</option>
            <option>Admin</option>
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
