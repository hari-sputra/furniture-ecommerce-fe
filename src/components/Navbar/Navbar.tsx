import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import Swal from "sweetalert2";
import { getAuthClient } from "../../api/grpc/client";
import { NavbarItem } from "./NavbarItem";

function Navbar() {
  const { pathname } = useLocation();
  const isLoggedIn = useAuthStore((state) => state.isLogged);
  const logoutStore = useAuthStore((state) => state.logout);
  const cartUrl = isLoggedIn ? "/cart" : "/login";
  const profileUrl = isLoggedIn ? "/profile" : "/login";
  const profileImg =
    pathname === "/profile" ||
    pathname === "/profile/change-password" ||
    pathname === "/profile/orders";
  const navigate = useNavigate();

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
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Furni<span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/shop" ? "active" : ""}`}>
              <Link className="nav-link" to="/shop">
                Belanja
              </Link>
            </li>
            <li
              className={`nav-item ${pathname === "/services" ? "active" : ""}`}
            >
              <Link className="nav-link" to="/services">
                Layanan
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <NavbarItem
              to={cartUrl}
              icon="/images/cart.svg"
              activeIcon="/images/cart-selected.svg"
              altText="Cart"
              isActive={pathname === "/cart"}
            />

            <NavbarItem
              to={profileUrl}
              icon="/images/user.svg"
              activeIcon="/images/user-selected.svg"
              altText="User"
              isActive={profileImg}
            />

            {isLoggedIn && (
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

export default Navbar;
