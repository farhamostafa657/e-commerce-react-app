import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CounterContext } from "../../Context/CounterContext";
import { TokenCoteext } from "../../Context/TokenContext";

function NavBar() {
  const { count } = useContext(CounterContext);
  const { token, setToken } = useContext(TokenCoteext);

  let navigate = useNavigate();
  function logOut() {
    setToken();
    localStorage.removeItem("userToken");
    navigate("/login");
  }
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
            {token ? (
              <>
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
                  <NavLink
                    className="btn btn-primary position-relative"
                    aria-current="page"
                    to={"/home"}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    {count > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle p-1 mt-1 bg-danger border border-light rounded-circle">
                        <span
                          style={{
                            fontSize: "0.6rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {count}
                        </span>
                      </span>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={"/category"}>
                    Category
                  </NavLink>
                </li>

                <li className="nav-item">
                  <p className="nav-link" onClick={logOut}>
                    Logout
                  </p>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
