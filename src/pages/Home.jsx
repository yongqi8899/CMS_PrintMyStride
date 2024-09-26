import { NavLink } from "react-router-dom";
import { MdComputer } from "react-icons/md";
import { memo } from "react";
const Home = memo(() => {
  return (
    <section className="m-20 ">
      <div className="container px-4 mx-auto text-center">
        <div className="relative flex items-center justify-center">
          <MdComputer fontSize="20em" />
          <p
            className="absolute text-3xl font-bold text-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            PrintMyStride
          </p>
        </div>
        <h2 className="mb-4 text-4xl font-bold">
          Welcome to PrintMyStride CMS
        </h2>
        <p className="mb-8 text-xl">Manage your content with ease and style</p>
        <NavLink
          to="/dashboard"
          className="px-6 py-2 font-semibold transition duration-300 rounded-full btn-gradient-blue"
        >
          Get Started
        </NavLink>
      </div>
    </section>
  );
});

export default Home;
