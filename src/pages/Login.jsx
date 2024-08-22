import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signin } from "@/data/auth/index.js";
import { useAuth } from "@/context/index.js";

export default function Login() {
  const location = useLocation();
  const { isAuthenticated, setCheckSession, setIsAuthenticated } = useAuth();
  const [{ email, password }, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) throw new Error("All fields are required");
      setLoading(true);
      const res = await signin({
        email,
        password,
      });
      toast.success(res.success);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setIsAuthenticated(true);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={location.state?.next || "/"} />;
  }
  return (
    <>
      <form
        className="flex flex-col gap-3 mx-auto my-5 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        <small>
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register!
          </Link>
        </small>
        <button className="self-center btn btn-primary" disabled={loading}>
          Login
        </button>
      </form>
    </>
  );
}
