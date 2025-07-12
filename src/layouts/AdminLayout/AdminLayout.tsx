import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { useAuthStore } from "../../store/auth";
import { useEffect } from "react";

function AdminLayout() {
  const userRole = useAuthStore((state) => state.role);
  const userIsLoggedIn = useAuthStore((state) => state.isLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "admin" || !userIsLoggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
