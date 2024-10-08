import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useLoaderData,
} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/context";
import Img from "@/components/Img";
import { memo } from "react";
const UpdateForm = memo(() => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const { id } = useParams();
  const products = useLoaderData();
  const product = products.find((product) => product._id === id);
  const { user } = useAuth();
  const [imageSrc, setImageSrc] = useState(product.image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Form method="POST" encType="multipart/form-data">
      <div className="m-auto mb-20 w-96">
        <fieldset disabled={busy}>
          <h2 className="m-auto text-xl bold">Update Product</h2>
          <div className="relative">
            <Img src={imageSrc} alt={product.title} />
            <label htmlFor="image" className="absolute bottom-0 right-0 btn">
              change image
              <input
                type="file"
                name="image"
                className="absolute opacity-0"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <label className="flex items-center gap-2 mt-2 input input-bordered">
            title
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Please write your title here"
              defaultValue={product.title}
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
          <label className="w-full mt-4 field">
            description
            <textarea
              className="w-full"
              type="text"
              name="description"
              cols="40"
              rows="10"
              placeholder="Please write description here"
              defaultValue={product.description}
            />
          </label>
        </fieldset>
        <div className="justify-end card-actions">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="btn btn-gradient-blue">
            {busy ? "Updating" : "Update"}
          </button>
        </div>
      </div>
    </Form>
  );
});
export default UpdateForm;
