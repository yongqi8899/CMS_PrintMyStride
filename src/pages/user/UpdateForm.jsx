import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useLoaderData,
} from "react-router-dom";

export default function UpdateForm() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { id } = useParams();
  const users = useLoaderData();
  const user = users.find((user) => user._id === id);
  return (
    <Form method="POST">
      <div className="m-auto w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create</h2>
          <label className="flex items-center mt-2 input input-bordered">
            userName
            <input
              type="text"
              name="userName"
              className="grow"
              placeholder="Please write your userName here"
              defaultValue={user.userName}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            firstName
            <input
              type="text"
              name="firstName"
              className="grow"
              placeholder="Please write your firstName here"
              defaultValue={user.firstName}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            lastName
            <input
              type="text"
              name="lastName"
              className="grow"
              placeholder="Please write your lastName here"
              defaultValue={user.lastName}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            email
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Please write email here"
              defaultValue={user.email}
              required
            />
          </label>
          <label className="flex items-center mt-2 input input-bordered">
            password
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Please write password here"
              defaultValue={user.password}
              required
            />
          </label>
          <select
            className="w-full max-w-xs mt-2 select select-bordered "
            type="text"
            name="role"
            defaultValue={user.role}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </fieldset>
        <div className="justify-end mt-2 card-actions ">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>

          <button
            type="submit"
            className="bg-green-500 btn hover:bg-green-600"
            disabled={busy}
          >
            {busy ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </Form>
  );
}
