import { useFormik } from "formik";

function Register() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmedpassword: "",
    phone: "",
    photo: "",
  };

  let registerForm = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function validate(values) {
    const errors = {};

    if (values.userName == "") {
      errors.userName = "requerid";
    } else if (values.userName.length < 3) {
      errors.userName = "username must be more than 3 char ";
    } else if (values.userName.length > 15) {
      errors.userName = "username must be less than 15 char ";
    }

    if (values.email == "") {
      errors.email = "requerid";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
    ) {
      errors.email = "invalid email";
    }

    if (values.password == "") {
      errors.password = "requerid";
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.email
      )
    ) {
      errors.password = "invalid password";
    }

    if (values.confirmedpassword == "") {
      errors.confirmedpassword = "requerid";
    } else if (values.confirmedpassword != values.password) {
      errors.password = "confirmedpassword and password must be equal";
    }

    if (values.phone == "") {
      errors.phone = "requerid";
    }

    if (values.photo == "") {
      errors.photo = "requerid";
    }

    console.log(errors);

    return errors;
  }

  return (
    <div>
      <div className="row my-5 h-100">
        <div className="col-md-6 offset-3">
          <h1 className="my-5 text-white">Sign up</h1>

          <form onSubmit={registerForm.handleSubmit}>
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
              <div class="alert alert-danger" role="alert">
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
              <div class="alert alert-danger" role="alert">
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
              <div class="alert alert-danger" role="alert">
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
                name="confirmedpassword"
                value={registerForm.values.confirmedpassword}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="floatingPassword">Repassword</label>
            </div>
            {registerForm.errors.confirmedpassword &&
            registerForm.touched.confirmedpassword ? (
              <div class="alert alert-danger" role="alert">
                {registerForm.errors.confirmedpassword}
              </div>
            ) : (
              ""
            )}

            <div className="form-floating mb-3">
              <input
                type="number"
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
              <div class="alert alert-danger" role="alert">
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
                value={registerForm.values.photo}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="photo">Photo</label>
            </div>
            {registerForm.errors.photo && registerForm.touched ? (
              <div class="alert alert-danger" role="alert">
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
