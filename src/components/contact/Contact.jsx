import React from "react";
import { useState, useEffect } from "react";

import { Constants } from "../../constants/constants";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { toast } from "react-toastify";

import "./Contact.css";


const Contact = () => {
  let initialValues = {
    fullname: "",
    email: "",
    message: "",
    phone: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    regexEmailCheck,
    regexMobileCheck,
    fullNameRequiredError,
    emailRequiredError,
    emailInavlidError,
    messageRequiredError,
    messageLengthError,
    mobileNumberRequiredError,
    mobileNumberInvalidError,
  } = Constants;

  const validate = (values) => {
    let errors = {};
    const regex = regexEmailCheck;
    const regexMobile = regexMobileCheck;

    const { fullname, email, message, phone } = values;
    if (fullname === "") {
      errors.fullname = fullNameRequiredError;
    }
    if (email === "") {
      errors.email = emailRequiredError;
    } else if (!regex.test(email)) {
      errors.email = emailInavlidError;
    }
    if (message === "") {
      errors.message = messageRequiredError;
    } else if (message.length < 35) {
      errors.message = messageLengthError;
    }
    if (phone === "") {
      errors.phone = mobileNumberRequiredError;
    } else if (!regexMobile.test(phone)) {
      errors.phone = mobileNumberInvalidError;
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location.reload(false);
    }
  }, [formErrors]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="form-container container">
        <div className="jumbotron contactus-description">
          <h2 className="display-6">Hello, Users!</h2>
          <p className="lead">You can react us at</p>
          <p className="lead">
            <AiOutlineMobile />
            +91 1800-120-555
          </p>
          <p className="lead">
            <AiOutlineMail /> grocerysupport@grofers.com
          </p>
          <p className="lead">
            <HiOutlineLocationMarker /> Bangalore
          </p>
        </div>

        <div className="row contact-form ">
          {/* <div className="col-lg-6"></div> */}
          <div className="col-lg-12">
            <div className="contact-for-wrapper">
              <h2>Contact Us</h2>
              <p>Please fill this form in a decent manner</p>
              <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Full Name <span className="text text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    onChange={handleChange}
                    value={formValues.fullname}
                    placeholder="Marco Jansen"
                    aria-describedby="nameError"
                  />
                  <small className="text-danger" id="nameError">{formErrors.fullname}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    E-mail <span className="text text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="exampleInputEmail1"
                    onChange={handleChange}
                    value={formValues.email}
                    placeholder="someone@gmail.com"
                    aria-describedby="emailError"
                  />
                  <small className="text-danger" id="emailError">{formErrors.email}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Contact Number <span className="text text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={handleChange}
                    value={formValues.phone}
                    placeholder="1234567890"
                    aria-describedby="phoneError"
                  />
                  <small className="text-danger" id="phoneError">{formErrors.phone}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Message <span className="text text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="message"
                    rows="3"
                    onChange={handleChange}
                    value={formValues.message}
                    placeholder="please type here!!!"
                    aria-describedby="messageError"
                  ></textarea>
                  <small className="text-danger" id="messageError">{formErrors.message}</small>
                </div>

                <button type="submit" className="btn btn-secondary ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;