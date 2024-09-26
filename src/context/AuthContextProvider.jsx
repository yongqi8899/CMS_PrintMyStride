import { useEffect, useState, memo } from "react";
import { me, signout } from "@/data/auth/index.js";
import { AuthContext } from "./index.js";
import { toast } from "react-toastify";

const AuthContextProvider = memo(({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkSession, setCheckSession] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await me();
        setUser(()=>user);
        setIsAuthenticated(()=>true);
      } catch (error) {
        console.log(error);
      } finally {
        setCheckSession(false);
      }
    };
    getUser() && checkSession;
  }, [checkSession]);

  const logout = async () => {
    try {
      await signout();
      toast("Logged out successfully");
      setIsAuthenticated(()=>false);
      setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setCheckSession,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});

export default AuthContextProvider;
