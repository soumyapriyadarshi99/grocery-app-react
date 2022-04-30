import React from "react";
import { Constants } from "../../constants/constants";
import { useDispatch } from "react-redux";
import {
  delCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/action";
import { useSelector } from "react-redux";
// import Navbar from "../navbar/navbar";

import "./cart.css";

const Cart = () => {
  let totalAmount = 0;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);
  console.log("cartState", state);

  const removeProduct = (props) => {
    dispatch(delCart(props._id));
  };
  const increaseProduct = (props) => {
    dispatch(increaseQuantity(props));
  };
  const decreaseProduct = (props) => {
    dispatch(decreaseQuantity(props));
  };

  return (
    <>
      {/* <Navbar /> */}

      <main class="page">
        <section class="shopping-cart dark">
          <div class="container">
            <div class="block-heading">
              <h2>Cart</h2>
            </div>
            {state.length > 0 ? (
              <div class="">
                <div class="row">
                  <div class="col-md-12 col-lg-8">
                    <div class="items">
                      {state.map((cart) => {
                        totalAmount +=
                          cart.qty !== "undefined" && cart.qty > 0
                            ? parseInt(cart.price * cart.qty)
                            : parseInt(cart.price);
                        return (
                          <div class="product">
                            <div class="row">
                              <div class="col-md-4">
                                <img
                                  class="mx-auto"
                                  src={Constants.imageUrl + cart.image}
                                  alt={cart.productName}
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="info">
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <div class="product-name">
                                        <h5>{cart.productName}</h5>
                                      </div>
                                    </div>

                                    <div class="row price">
                                      <p className="cart-price">
                                        Price ₹{cart.price}
                                      </p>

                                      <button
                                        className="btn btn-outline-dark bt cart-remove-btn"
                                        onClick={() => decreaseProduct(cart)}
                                      >
                                        -
                                      </button>
                                      <span className="ml-3">{cart.qty}</span>
                                      <button
                                        className="btn btn-outline-dark bt cart-remove-btn"
                                        onClick={() => increaseProduct(cart)}
                                      >
                                        +
                                      </button>
                                      <button
                                        className="btn btn-outline-dark bt cart-remove-btn"
                                        onClick={() => removeProduct(cart)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4 cart-summary">
                    <div class="summary">
                      <h3>Summary</h3>
                      <div class="summary-item">
                        <span class="text">Subtotal: </span>
                        <span class="price">₹{totalAmount}</span>
                      </div>

                      <div class="summary-item">
                        <span class="text">Shipping Charge: </span>
                        <span class="price">₹0</span>
                      </div>
                      <div class="summary-item">
                        <span class="text">Total: </span>
                        <span class="price">₹{totalAmount}</span>
                      </div>
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-lg btn-block"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="alert alert-danger"> Your cart is empty.</div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
