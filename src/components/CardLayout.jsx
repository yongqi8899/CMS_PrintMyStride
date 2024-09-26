import { useNavigate } from "react-router-dom";
import {memo} from "react";
import Img from "@/components/Img";

const CardLayout = memo(({ props }) => {
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
          <div className="absolute bottom-0 right-0 flex flex-col w-full gap-2 p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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
});
export default CardLayout;
