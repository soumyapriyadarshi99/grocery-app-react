import React, { useState, useEffect } from "react";
import { Constants } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

import "./register.css";

import { NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();


  const initialValues = {
    username: "",
    email: "",
    password: "",
    mobile: "",
    confirm: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const commonHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem(formValues.email, formValues.password);
      navigate("/login");
    }
  }, [formErrors]);

  const {
    regexEmailCheck,
    regexMobileCheck,
    fullNameRequiredError,
    emailRequiredError,
    emailInavlidError,
    mobileNumberRequiredError,
    mobileNumberInvalidError,
    passwordRequiredError,
    miniumPasswordLengthError,
    maximumPasswordLengthError,
    confirmRequiredError,
    checkingPassword,
  } = Constants;

  const validate = (values) => {
    const errors = {};
    const regex = regexEmailCheck;
    const regexMobile = regexMobileCheck;
    if (!values.username) {
      errors.username = fullNameRequiredError;
    }
    if (!values.email) {
      errors.email = emailRequiredError;
    } else if (!regex.test(values.email)) {
      errors.email = emailInavlidError;
    }
    if (!values.password) {
      errors.password = passwordRequiredError;
    } else if (values.password.length < 6) {
      errors.password = miniumPasswordLengthError;
    } else if (values.password.length > 10) {
      errors.password = maximumPasswordLengthError;
    }
    if (!values.mobile) {
      errors.mobile = mobileNumberRequiredError;
    } else if (!regexMobile.test(values.mobile)) {
      errors.mobile = mobileNumberInvalidError;
    }

    if (!values.confirm) {
      errors.confirm = confirmRequiredError;
    } else if (values.password != values.confirm) {
      errors.confirm = checkingPassword;
    }
    return errors;
  };


  return (
    <div>
     
      <h1 className="header my-4">Register Your Account</h1>
      <form className="container col-lg-4">
        <div className="form-group ">
          <label>
            Name <span className="text text-danger">*</span>
          </label>
          <input
            type="text"
            onChange={commonHandler}
            name="username"
            id="Name"
            placeholder="Marco Jansen"
            className="form-control"
            aria-describedby="nameError"
          />
          <p className="text-danger" id="nameError">{formErrors.username}</p>
        </div>
        <div className="form-group ">
          <label htmlFor="exampleEmail">
            Email <span className="text text-danger">*</span>
          </label>
          <input
            type="email"
            onChange={commonHandler}
            name="email"
            id="exampleEmail"
            placeholder="someone@gmail.com"
            className="form-control"
            aria-describedby="emailError"
          />
          <p className="text-danger" id="emailError" >{formErrors.email}</p>
        </div>
        <div className="form-group ">
          <label htmlFor="mobile">
            Mobile number <span className="text text-danger">*</span>
          </label>
          <input
            type="text"
            onChange={commonHandler}
            name="mobile"
            id="mobile"
            placeholder="Enter mobile number"
            className="form-control"
            aria-describedby="mobileError"
          />
          <p className="text-danger" id="mobileError">{formErrors.mobile}</p>
        </div>
        <div className="form-group ">
          <label htmlFor="password">
            Password <span className="text text-danger">*</span>
          </label>
          <input
            type="password"
            onChange={commonHandler}
            name="password"
            id="password"
            placeholder="Enter password"
            className="form-control"
            aria-describedby="passwordError"
          />
          <p className="text-danger" id="passwordError">{formErrors.password}</p>
        </div>
        <div className="form-group ">
          <label htmlFor="confirm">
            Confirm Password <span className="text text-danger">*</span>
          </label>

          <input
            type="password"
            onChange={commonHandler}
            name="confirm"
            id="confirm"
            placeholder="Confirm password"
            className="form-control"
            aria-describedby="confirmError"
          />

          <p className="text-danger" id="confirmError">{formErrors.confirm}</p>
        </div>
        <div className="form-group">
          <p>
            Already have an account?{" "}
            <span>
              {" "}
              <NavLink to="/login">Login</NavLink>
            </span>
          </p>
        </div>

        <button
          type="submit"
          onClick={submitHandler}
          className="btn btn-secondary"
        >
          Submit
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default Register;