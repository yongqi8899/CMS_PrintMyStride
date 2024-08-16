import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerUser = async (firstname, lastname, email, password) => {
    try {
      const res = await fetch(
        "https://bookstorebackend-3qw1.onrender.com/register/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed");
        toast.error("Registration failed");
        return null;
      }
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isRegisted = await registerUser(
        firstname,
        lastname,
        email,
        password
      );
      if (isRegisted) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h3 className="mb-5 text-5xl font-bold text-primary">Register</h3>
            <form className="p-10 shadow-xl card" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label" htmlFor="firstname">
                  <span className="label-text">Firstname</span>
                </label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="lastname">
                  <span className="label-text">Lastname</span>
                </label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="flex form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <br />
              <p>
                already have account?{" "}
                <NavLink to="/login" className="text-primary">
                  Login
                </NavLink>
              </p>
              <div className="flex mt-6 form-control">
                <button
                  type="submit"
                  className="text-white bg-primary border-transparent btn btn-primary hover:bg-teal-600 hover:border-transparent"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
