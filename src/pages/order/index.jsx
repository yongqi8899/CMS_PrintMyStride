import { useOutletContext, useNavigate } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Oders() {
  const oders = useOutletContext();
  const navigate = useNavigate();

  return (
    <div>oders</div>
    // <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
    //   {oders &&
    //     oders.map((oder) => (
    //       <div className="card glass w-1fr" key={oder.id}>
    //         <CardImg src={oder.cover} alt={oder.title} />
    //         <div className="card-body">
    //           <h2 className="card-title">{oder.title}</h2>
    //           <div className="flex justify-between mb-2">
    //             <p>{oder.author}</p>
    //             <p>{oder.create_at.split("T")[0]}</p>
    //           </div>
    //           <div className="justify-end card-actions">
    //             <button
    //               className="btn"
    //               onClick={() => navigate(`/oders/${oder.id}/update`)}
    //             >
    //               update
    //             </button>
    //             <button
    //               className="btn"
    //               onClick={() => navigate(`/oders/${oder.id}/delete`)}
    //             >
    //               delete
    //             </button>
    //             <button
    //               className="btn"
    //               onClick={() => navigate(`/oders/${oder.id}`)}
    //             >
    //               detail
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}
