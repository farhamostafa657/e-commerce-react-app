import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Layout() {
  return (
    <div className="bg-black h-100">
      <NavBar />
      <div className="container ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
