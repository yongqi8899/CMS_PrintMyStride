import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signup } from "@/data/auth/index.js";
import { useAuth } from "@/context/index.js";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();
  const { isAuthenticated, setCheckSession, setIsAuthenticated } = useAuth();
  const [{ userName, email, password, confirmPassword }, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const resetForm = () => {
    setForm({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!userName || !email || !password || !confirmPassword)
        throw new Error("All fields are required");
      if (password !== confirmPassword)
        throw new Error("Passwords do not match");
      setLoading(true);
      const res = await signup({
        userName,
        email,
        password,
      });
      toast.success(res.success);
      setIsAuthenticated(true);
      setCheckSession(true);
      navigate(location.state?.next || "/");
    } catch (error) {
      toast.error(error.message);
      if (error.message === "User already exists") {
        resetForm();
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={location.state?.next || "/"} />;
  }

  return (
    <div className="flex flex-wrap items-center min-h-[calc(100vh-10rem)] justify-around">
      <div className="w-4/5 p-10 m-auto border rounded-2xl md:w-2/5 bg-neutral">
        <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">Signup</h1>
          <label className="flex items-center gap-2 grow input input-bordered">
            <FaUser />
            <input
              name="userName"
              value={userName}
              onChange={handleChange}
              className="grow"
              placeholder="User name"
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            <MdEmail />
            <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              className="grow"
              placeholder="Email"
            />
          </label>
          <label className="flex items-center gap-2 grow input input-bordered">
            <FaKey />
            <input
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
          <label className="flex items-center gap-2 grow input input-bordered">
            <FaKey />
            <input
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              type="password"
              className="grow"
              placeholder="Confirm your password..."
            />
          </label>

          <button className="btn btn-gradient-blue" disabled={loading}>
            Create Account
          </button>
          {/* <div className="relative flex items-center my-1">
            <div className="flex-grow border-t"></div>
            <span className="flex-shrink mx-4 text-xs">OR</span>
            <div className="flex-grow border-t "></div>
          </div> */}
          <div className="flex justify-center">
            {/* <div onClick={logWithGoogle}>
              <FcGoogle fontSize="1.5em" />
            </div> */}
          </div>
          <small>
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in!
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
}
