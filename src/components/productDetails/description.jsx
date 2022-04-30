import { useParams } from "react-router-dom";

import { Constants } from "../../constants/constants";
import React, { useState, useEffect } from "react";
import getData from "../../utils/util";
import { useDispatch } from "react-redux";

import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import { addCart } from "../../redux/action";
import "./description.css";

const Description = () => {
  const { apiUrl, imageUrl } = Constants;
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  let { itemName } = useParams();
  const [products, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        let response = await getData(
          apiUrl + "products/search/" + itemName,
          "get"
        );
        setLoading(false);
        setproduct(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductDetails();
  }, []);

  const loginStatus = localStorage.getItem("IsLogin");
  console.log(loginStatus);

  const addToCart = (props) => {
    if (cartBtn === "Add to Cart" && loginStatus === "true") {
      const productData = {
        ...props,
        qty: parseInt(quantity),
      };
      dispatch(addCart(productData));
      alert("Item Added Successfully");
      setCartBtn("Item Added");
    } else if (cartBtn === "Item Added" && loginStatus === "true") {
      alert("Item Already in cart");
    } else {
      alert("You are not Logged In");
      // <Redirect to="/Login" />;
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="row my-5">
            <div className="col-lg-12">
              {products.length > 0 &&
                products.map((product) => {
                  return (
                    <div className="row" key={product._id}>
                      <div className="col-lg-4">
                        <div className="card">
                          <img
                            className="desc-image"
                            src={imageUrl + product.image}
                            alt={product.image}
                          />
                          <div className="card-body" key={product._id}>
                            <div className="row text-center">
                              <span className="col-lg-6">
                                MRP:
                                <del className="px-2">
                                  <span>₹{product.mrp}</span>
                                </del>
                              </span>
                              <span className="col-lg-6">
                                Price: <span>₹{product.price}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <h2 className="card-title">{product.productName}</h2>
                        <p>{product.description}</p>
                        <h5>Available Quantity : {product.quantity}</h5>

                        <button
                          onClick={() => addToCart(product)}
                          type="button"
                          className="btn btn-secondary my-5"
                        >
                          {cartBtn}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Description;
