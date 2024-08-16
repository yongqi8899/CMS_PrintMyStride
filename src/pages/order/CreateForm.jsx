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
            Title
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Please write your title here"
              required
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            Author
            <input
              type="text"
              name="author"
              className="grow"
              placeholder="Please write author here"
              required
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            Cover
            <input
              type="url"
              name="cover"
              className="grow"
              placeholder="Please write cover url here"
              required
            />
          </label>
          <label className="field">
            Content
            <textarea
              type="text"
              name="content"
              cols="40"
              rows="10"
              placeholder="Please write content here"
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
