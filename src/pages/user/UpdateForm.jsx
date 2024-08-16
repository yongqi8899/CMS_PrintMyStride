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
  const users = useOutletContext();
  const user = users.find((user) => user.id === +id);
  return (
    <Form method="POST">
      {/* <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Update</h2>
          <label className="flex items-center gap-2 input input-bordered">
            Title
            <input
              type="text"
              name="title"
              className="grow"
              defaultValue={user.title}
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            Author
            <input
              type="text"
              name="author"
              className="grow"
              defaultValue={user.author}
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            Cover
            <input
              type="url"
              name="cover"
              className="grow"
              defaultValue={user.cover}
            />
          </label>
          <label className="field">
            Content
            <textarea
              type="text"
              name="content"
              cols="40"
              rows="10"
              defaultValue={user.content}
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
      </div> */}
      <div className="m-auto w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Create</h2>
          <label className="flex items-center mt-2 input input-bordered">
            username
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Please write your username here"
              defaultValue={user.username}
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
              placeholder="Please write password url here"
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
            <option disabled selected>
              Which role is the user?
            </option>
            <option>User</option>
            <option>Admin</option>
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
            {busy ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </Form>
  );
}
