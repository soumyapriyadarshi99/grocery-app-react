import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Constants } from "../../constants/constants";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [loginStatus, setLoginStatus] = useState(0);

  const commonHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    // setFormErrors(validate(formValues));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    localStorage.setItem("IsLogin", true);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
      // localStorage.setItem("userName", formValues.username);
      // localStorage.setItem("password", formValues.password);
      if (loginDataValidation(formValues)) {
        localStorage.setItem("logInStatus", true);
        alert("login success");
      } else {
        alert("invalid credintials");
      }
      navigate("/");
    }
  }, [formErrors]);

  const loginDataValidation = (formValues) => {
    for (let i = 0; i < localStorage.length; i++) {
      let storageEmail = localStorage.key(i);
      if (storageEmail === formValues.email) {
        if (formValues.password === localStorage.getItem(storageEmail)) {
          return true;
        }
      }
    }
  };

  const validate = (values) => {
    const {
      regexEmailCheck,
      emailRequiredError,
      emailInavlidError,
      passwordRequiredError,
    } = Constants;
    const errors = {};
    const pass = localStorage.getItem("password");
    const userMail = localStorage.getItem("email");
    console.log(pass);
    const regex = regexEmailCheck;

    if (!values.email) {
      errors.email = emailRequiredError;
    } else if (!regex.test(values.email)) {
      errors.email = emailInavlidError;
    }
    //  else if (userMail !== values.email) {
    //   errors.email = "This is not a registered email!";
    // }
    if (!values.password) {
      errors.password = passwordRequiredError;
    }
    //  else if (pass !== values.password) {
    //   errors.password = "invalid password";
    // }

    return errors;
  };

  const { email, password } = formValues;
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="text-center my-4">Login</h1>
      <Form className="container col-lg-4">
        <FormGroup>
          <Label htmlFor="exampleEmail">
            Email <span className="text text-danger">*</span>
          </Label>
          <Input
            type="email"
            onChange={commonHandler}
            name="email"
            id="exampleEmail"
            placeholder="Enter email"
            aria-describedby="emailError"
          />
          <p className="text-danger" id="emailError">{formErrors.email}</p>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">
            password <span className="text text-danger">*</span>
          </Label>
          <Input
            type="password"
            onChange={commonHandler}
            name="password"
            id="password"
            placeholder="Enter password"
            aria-describedby="passError"
          />
          <p className="text-danger" id="passError">{formErrors.password}</p>
        </FormGroup>

        <Button className="loginButton" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>

      {/* <Footer /> */}
    </div>
  );
};

export default Login;