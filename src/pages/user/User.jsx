import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import CardImg from "@/components/CardImg";

export default function User() {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useOutletContext();
  const user = users.find((user) => user.id === +id);

  const handleDelete = () => {
    navigate(`/users/${id}/delete`);
  };
  const handleUpdate = () => {
    navigate(`/users/${id}/update`);
  };

  return (
    <div>
      user
    </div>
    // <div>
    //   {user && (
    //     <>
    //       <div className="min-h-screen hero bg-base-200">
    //         <div className="flex-col hero-content lg:flex-row-reverse">
    //           <CardImg src={user.cover} alt={user.title} title={user.title} />
    //           <div>
    //             <h1 className="mb-6 text-5xl font-bold">{user.title}</h1>
    //             <div className="flex justify-between">
    //               <p>{user.author}</p>
    //               <p>{user.create_at.split("T")[0]}</p>
    //             </div>
    //             <p className="py-6">{user.content}</p>
    //             <div className="flex justify-end w-full gap-6">
    //               <button className="btn" onClick={handleUpdate}>
    //                 update
    //               </button>
    //               <button className="btn" onClick={handleDelete}>
    //                 delete
    //               </button>
    //               <button className="btn" onClick={() => navigate("/")}>
    //                 back
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
}
