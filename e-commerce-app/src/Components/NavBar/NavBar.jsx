import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={"/home"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to={"/home"}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/register"}>
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category"}>
                Category
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
