import { useNavigate } from "react-router-dom";
import Img from "@/components/Img";

const CardLayout = ({ props }) => {
  const { src, title, children, updateNav, deleteNav, detailNav } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="relative card glass w-full max-w-md hover:drop-shadow-[0_-5px_5px_#37cdbe] bg-neutral group">
        <figure>
          <Img src={src} alt={title} />
        </figure>
        <div className="card-body">
          {children}
          <div className="absolute bottom-0 right-0 p-4 flex flex-col gap-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="btn" onClick={() => navigate(`${updateNav}`)}>
              update
            </button>
            <button className="btn" onClick={() => navigate(`${deleteNav}`)}>
              delete
            </button>
            <button className="btn" onClick={() => navigate(`${detailNav}`)}>
              detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardLayout;
