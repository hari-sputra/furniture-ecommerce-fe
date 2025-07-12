import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import Swal from "sweetalert2";
import { getAuthClient } from "../../api/grpc/client";
import { NavbarItem } from "../Navbar/NavbarItem";

function AdminNavbar() {
  const isUserLoggedIn = useAuthStore((state) => state.isLogged);
  const navigate = useNavigate();
  const logoutStore = useAuthStore((state) => state.logout);
  const { pathname } = useLocation();

  // methods
  const logout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, cancel!",
    });

    if (!result.isConfirmed) return;

    const res = await getAuthClient().logout({});

    if (!res.response.meta?.isError) {
      logoutStore();

      localStorage.removeItem("access_token");
      navigate("/");
    }
  };

  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Admin navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/admin/dashboard">
          Furni<span>.</span> Admin
        </Link>

        <div className="d-flex align-items-center">
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0">
            <NavbarItem
              to="/admin/profile/change-password"
              icon="/images/user.svg"
              activeIcon="/images/user-selected.svg"
              altText="User"
              isActive={pathname === "/admin/profile/change-password"}
            />

            {isUserLoggedIn && (
              <NavbarItem
                onClick={logout}
                icon="/images/sign-out.svg"
                altText="logout"
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
