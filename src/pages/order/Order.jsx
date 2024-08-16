import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import CardImg from "@/components/CardImg";

export default function User() {
  const navigate = useNavigate();
  const { id } = useParams();
  const oders = useOutletContext();
  const oder = oders.find((oder) => oder.id === +id);

  const handleDelete = () => {
    navigate(`/oders/${id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/oders/${id}/update`);
  };

  return (
    <div>
      {oder && (
        <>
          <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
              <CardImg src={oder.cover} alt={oder.title} title={oder.title} />
              <div>
                <h1 className="mb-6 text-5xl font-bold">{oder.title}</h1>
                <div className="flex justify-between">
                  <p>{oder.author}</p>
                  <p>{oder.create_at.split("T")[0]}</p>
                </div>
                <p className="py-6">{oder.content}</p>
                <div className="flex justify-end w-full gap-6">
                  <button className="btn" onClick={handleUpdate}>
                    update
                  </button>
                  <button className="btn" onClick={handleDelete}>
                    delete
                  </button>
                  <button className="btn" onClick={() => navigate("/")}>
                    back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
