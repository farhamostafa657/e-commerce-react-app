import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as YUP from "yup";

function Register() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmedPassword: "",
    phone: "",
    photo: null,
  };

  const [apiError, setApiError] = useState(null);

  const validationSchema = YUP.object().shape({
    userName: YUP.string()
      .required("user name is requerd")
      .min(3, "must be at least 3 char")
      .max(15, "must 15 char maximum"),
    email: YUP.string().email("invalid email").required("email is required"),
    password: YUP.string()
      .matches(/^([A-Z][a-z0-9]{3,8})$/, "invalid password")
      .required("password is requered"),
    confirmedPassword: YUP.string()
      .oneOf(
        [YUP.ref("password")],
        "password and confermed password should be the same"
      )
      .required("confirmed password is required"),
    phone: YUP.string().required("phone is required"),
    photo: YUP.mixed()
      .required("photo is required")
      .test("fileType", "Only images are allowed", (value) => {
        return (
          value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        );
      })
      .test("fileSize", "File size must be less than 3MB", (value) => {
        return value && value.size <= 3 * 1024 * 1024; // الحد الأقصى 2MB
      }),
  });

  const navigate = useNavigate();

  async function callSignUpApi(values) {
    let formData;
    try {
      setApiError(null);
      formData = new FormData();
      formData.append("userName", values.userName);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("confirmedPassword", values.confirmedPassword);
      formData.append("phone", values.phone);
      formData.append("photo", values.photo);
      let { data } = await axios.post(
        "http://localhost:8888/auth/signUp",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(data);
      if (data.message == "created") {
        navigate("/login");
      }
    } catch (error) {
      console.log(values);
      console.log(error.response.data.message);
      setApiError(error.response.data.message);
    }
  }

  let registerForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: callSignUpApi,
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

          <form onSubmit={registerForm.handleSubmit}>
            {apiError ? (
              <div className="alert alert-danger" role="alert">
                {apiError}
              </div>
            ) : (
              ""
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="User Name"
                name="userName"
                value={registerForm.values.userName}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>
            {registerForm.touched.userName && registerForm.errors.userName ? (
              <div className="alert alert-danger" role="alert">
                {registerForm.errors.userName}
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
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="floatingPassword">email</label>
            </div>
            {registerForm.errors.email && registerForm.errors.email ? (
              <div className="alert alert-danger" role="alert">
                {registerForm.errors.email}
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
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {registerForm.errors.password && registerForm.touched.password ? (
              <div className="alert alert-danger" role="alert">
                {registerForm.errors.password}
              </div>
            ) : (
              ""
            )}

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="repassword"
                placeholder="Repassword"
                name="confirmedPassword"
                value={registerForm.values.confirmedPassword}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="floatingPassword">Repassword</label>
            </div>
            {registerForm.errors.confirmedPassword &&
            registerForm.touched.confirmedPassword ? (
              <div className="alert alert-danger" role="alert">
                {registerForm.errors.confirmedPassword}
              </div>
            ) : (
              ""
            )}

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="phone"
                name="phone"
                value={registerForm.values.phone}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="phone">phone</label>
            </div>
            {registerForm.errors.phone && registerForm.touched.phone ? (
              <div className="alert alert-danger" role="alert">
                {registerForm.errors.phone}
              </div>
            ) : (
              ""
            )}

            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control"
                id="photot"
                placeholder="photo"
                name="photo"
                accept="image/*"
                onChange={(event) => {
                  registerForm.setFieldValue(
                    "photo",
                    event.currentTarget.files[0]
                  );
                }}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="photo">Photo</label>
            </div>
            {registerForm.errors.photo && registerForm.touched ? (
              <div className="alert alert-danger" role="alert">
                {registerForm.errors.photo}
              </div>
            ) : (
              ""
            )}

            <button className="btn btn-light primary mb-5 ">Regester</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
