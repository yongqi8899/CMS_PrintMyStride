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
  const oder = oders.find((oder) => oder.id === +id);
  return (
    <Form method="POST">
      <div className="m-auto card-body w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Update</h2>
          <label className="flex items-center gap-2 input input-bordered">
            Title
            <input
              type="text"
              name="title"
              className="grow"
              defaultValue={oder.title}
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            Author
            <input
              type="text"
              name="author"
              className="grow"
              defaultValue={oder.author}
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            Cover
            <input
              type="url"
              name="cover"
              className="grow"
              defaultValue={oder.cover}
            />
          </label>
          <label className="field">
            Content
            <textarea
              type="text"
              name="content"
              cols="40"
              rows="10"
              defaultValue={oder.content}
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
