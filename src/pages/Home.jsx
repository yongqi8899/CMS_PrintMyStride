import { NavLink } from "react-router-dom";
import { MdComputer } from "react-icons/md";

function Home() {
  return (
    <section className=" m-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center">
          <MdComputer fontSize="15em" />
        </div>
        <h2 className="text-4xl font-bold mb-4">
          Welcome to PrintMyStride CMS
        </h2>
        <p className="text-xl mb-8">Manage your content with ease and style</p>
        <NavLink
          to="/dashboard"
          className=" px-6 py-2 rounded-full font-semibold btn-gradient-blue transition duration-300"
        >
          Get Started
        </NavLink>
      </div>
    </section>
  );
}

export default Home;
