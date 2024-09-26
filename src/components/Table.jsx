import { useNavigate, useLoaderData } from "react-router-dom";
import { formatDate } from "@/utils/index.js";
import {memo} from "react";
const Table =  memo(({ path }) => {
  const data = useLoaderData();
  const dataKeys = Object.keys(data[0]).slice(1, -1);
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto">
      <button className="btn" onClick={() => navigate(`/${path}/create`)}>
        +
      </button>
      <table className="table text-center">
        <thead>
          <tr>
            {dataKeys && dataKeys.map((p,index) => <th key={index}> {p}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {dataKeys.map((key) => (
                <td key={key}>
                  {typeof item[key] === "string" &&
                  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(
                    item[key]
                  )
                    ? formatDate(item[key])
                    : item[key]}
                </td>
              ))}
              <td className="">
                <button
                  className="btn"
                  onClick={() => navigate(`/${path}/${item._id}/update`)}
                >
                  update
                </button>
                <button
                  className="ml-2 btn"
                  onClick={() => navigate(`/${path}/${item._id}/delete`)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default Table;
