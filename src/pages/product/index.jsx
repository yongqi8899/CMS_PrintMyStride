import { useNavigate, useLoaderData } from "react-router-dom";
import {formatCurrency} from "@/utils";
import CardLayout from "@/components/CardLayout";
export default function Products() {
  const products = useLoaderData();
  const navigate = useNavigate();

  const path = "products";
  const generateProps = (item) => ({
    src: item.image,
    title: item.title,
    children: (
      <div className="flex text-2xl font-redressed justify-between">
        <h2 >{item.title}</h2>
        <div className="text-secondary"> {formatCurrency(item.price)}{" "}</div>
      </div>
    ),
    createNav: `/${path}/create`,
    updateNav: `/${path}/${item._id}/update`,
    deleteNav: `/${path}/${item._id}/delete`,
    detailNav: `/${path}/${item._id}`,
  });
  return (
    <>
      <div>
        <button className="btn" onClick={() => navigate(`/${path}/create`)}>
          +
        </button>
      </div>
      {products && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 justify-items-center">
          {products.map((product) => {
            const props = generateProps(product);
            return <CardLayout key={product._id} props={props} />;
          })}
        </div>
      )}
    </>
  );
}
