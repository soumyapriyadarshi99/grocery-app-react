
import { Constants } from "../../constants/constants";

import "./about.css";

const About = () => {
  const { aboutGrocery, aboutGroceryItems } = Constants;
  return (
    <>
      {/* <Navbar /> */}
      <div className="row mb-3 container">
        <div className="row no-gutters">
          <div className="col-md-4 aboutus-image">
            <img
              src={process.env.PUBLIC_URL + "/images/grocery.jpg"}
              alt="grocery"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">{aboutGrocery}</p>
              <p className="card-text">{aboutGroceryItems}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
