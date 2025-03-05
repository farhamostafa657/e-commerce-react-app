import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Category from "./Components/Ctegory/Category";
import NotFound from "./Components/NotFound/NotFound";
import ProtectedRoutes from "./Components/ProtectedRoute/ProtectedRoutes";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

// pallete url https://coolors.co/palette/606c38-283618-fefae0-dda15e-bc6c25
// npm i react-router-dom to make routing
// npm i react-spinners  for loader
//formic and react hook form  to handle form
//npm i formic --save
//npm i yup for validation
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        {
          path: "category",
          element: (
            <ProtectedRoutes>
              <Category />
            </ProtectedRoutes>
          ),
        },
        {
          path: "product-details/:id",
          element: (
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "*",
          element: (
            <ProtectedRoutes>
              <NotFound />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Home /> */}
    </div>
  );
}

export default App;
