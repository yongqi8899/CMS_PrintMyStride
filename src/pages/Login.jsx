import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoged, setIsLoged] = useState(false);

  const loginProcess = async (email, password) => {
    try {
      const res = await fetch(
        "https://bookstorebackend-3qw1.onrender.com/login/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        toast.error(data.error || "Login failed");
      } else {
        const { token } = data;
        localStorage.setItem("token", token);
        toast("Login success");
        setIsLoged(true);
        return true;
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isLoged = await loginProcess(email, password);
      if (isLoged) {
        navigate("/book");
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h3 className="mb-5 text-5xl font-bold text-primary">Login</h3>
            <form className="card shadow-xl p-10" onSubmit={handleSubmit}>
              <div className="form-control">
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
              <div className="form-control">
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
              <br />
              <p>
                No account?{" "}
                <NavLink to="/register" className="text-primary">
                  Register
                </NavLink>
              </p>
              {error && <p className="text-red-500">{error}</p>}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-primary hover:bg-teal-600 hover:border-transparent border-transparent text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
