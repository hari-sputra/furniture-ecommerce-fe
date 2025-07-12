import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { useEffect } from "react";

function AuthLayout() {
  const isUserLoggedIn = useAuthStore((state) => state.isLogged);
  //   const userRole = useAuthStore((state) => state.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default AuthLayout;
