import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as YUP from "yup";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [apiError, setApiError] = useState(null);

  const validationSchema = YUP.object().shape({
    email: YUP.string().email("invalid email").required("email is required"),
    password: YUP.string()
      .matches(/^([A-Z][a-z0-9]{3,8})$/, "invalid password")
      .required("password is requered"),
  });

  const navigate = useNavigate();

  async function callLoginApi(values) {
    try {
      setApiError(null);

      let { data } = await axios.post(
        "http://localhost:8888/auth/login",
        values
      );
      console.log(data);
      if (data.message == "created") {
        navigate("/home");
      }
    } catch (error) {
      console.log(values);
      console.log(error.response.data.message);
      setApiError(error.response.data.message);
    }
  }

  let loginForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: callLoginApi,
  });

  // function validate(values) {
  //   const errors = {};

  //   if (values.userName == "") {
  //     errors.userName = "requerid";
  //   } else if (values.userName.length < 3) {
  //     errors.userName = "username must be more than 3 char ";
  //   } else if (values.userName.length > 15) {
  //     errors.userName = "username must be less than 15 char ";
  //   }

  //   if (values.email == "") {
  //     errors.email = "requerid";
  //   } else if (
  //     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
  //   ) {
  //     errors.email = "invalid email";
  //   }

  //   if (values.password == "") {
  //     errors.password = "requerid";
  //   } else if (
  //     !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
  //       values.email
  //     )
  //   ) {
  //     errors.password = "invalid password";
  //   }

  //   if (values.confirmedPassword == "") {
  //     errors.confirmedPassword = "requerid";
  //   } else if (values.confirmedPassword != values.password) {
  //     errors.password = "confirmedPassword and password must be equal";
  //   }

  //   if (values.phone == "") {
  //     errors.phone = "requerid";
  //   }

  //   if (values.photo == "") {
  //     errors.photo = "requerid";
  //   }

  //   console.log(errors);

  //   return errors;
  // }

  return (
    <div>
      <div className="row my-5 h-100">
        <div className="col-md-6 offset-3">
          <h1 className="my-5 text-white">Sign up</h1>

          <form onSubmit={loginForm.handleSubmit}>
            {apiError ? (
              <div className="alert alert-danger" role="alert">
                {apiError}
              </div>
            ) : (
              ""
            )}

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                name="email"
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
              />
              <label htmlFor="floatingPassword">email</label>
            </div>
            {loginForm.errors.email && loginForm.errors.email ? (
              <div className="alert alert-danger" role="alert">
                {loginForm.errors.email}
              </div>
            ) : (
              ""
            )}

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {loginForm.errors.password && loginForm.touched.password ? (
              <div className="alert alert-danger" role="alert">
                {loginForm.errors.password}
              </div>
            ) : (
              ""
            )}

            <button className="btn btn-light primary mb-5 ">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
