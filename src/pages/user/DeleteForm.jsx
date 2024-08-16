import { Form, useNavigation, useNavigate } from "react-router-dom";

export default function DeleteForm() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const busy = navigation.state === "submitting";
  return (
    <Form method="DELETE">
      <div className="card w-96 bg-base-100 shadow-xl m-auto">
        <div className="card-body">
          <h2 className="card-title">Delete User</h2>
          <p>Are you sure you want delete it?</p>
          <div className="card-actions justify-end">
            <button className="btn" type="button" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button className="btn" type="submit">
              {busy ? "Deleting" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
