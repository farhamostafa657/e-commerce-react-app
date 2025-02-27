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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function validate(values) {
    const errors = {};

    if (values.userName == "") {
      errors.name = "requerid";
    } else if (values.userName.length < 3) {
      errors.name = "username must be more than 3 char ";
    } else if (values.userName.length > 15) {
      errors.name = "username must be less than 15 char ";
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
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                name="email"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
              />
              <label htmlFor="floatingPassword">email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="repassword"
                placeholder="Repassword"
                name="confirmedpassword"
                value={registerForm.values.confirmedpassword}
                onChange={registerForm.handleChange}
              />
              <label htmlFor="floatingPassword">Repassword</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="phone"
                name="phone"
                value={registerForm.values.phone}
                onChange={registerForm.handleChange}
              />
              <label htmlFor="phone">phone</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control"
                id="photot"
                placeholder="photo"
                name="photo"
                value={registerForm.values.photo}
                onChange={registerForm.handleChange}
              />
              <label htmlFor="photo">Photo</label>
            </div>

            <button className="btn btn-light primary mb-5 ">Regester</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
