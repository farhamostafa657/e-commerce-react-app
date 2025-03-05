import { useContext } from "react";
import { TokenCoteext } from "../../Context/TokenContext";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const { token } = useContext(TokenCoteext);

  if (localStorage.getItem("userToken")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRoutes;
