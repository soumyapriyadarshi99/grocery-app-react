import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Constants } from "../../constants/constants";
import getData from "../../utils/util";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

const ProductList = (props) => {
  const subCat = useParams("subCat");
  const { apiUrl, imageUrl } = Constants;
  const { catId } = useParams();
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);

  if (props.link === undefined) {
    var link = apiUrl + "products/cat/" + catId;
  } else {
    var link = props.link;
  }
  const cachesName = sessionStorage.getItem("categName");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        let response = await getData(link, "get");
        // console.log("subcatedata", response.data.data);
        setLoading(false);
        setproducts(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [link]);

  const showDescription = (event) => {
    const product = event.target.id;
    // const selectedItem = products.find((item) => item.productName === product);
    // const url = selectedItem.productName.replaceAll(" ", "-");
    console.log(event);
    navigate("/description/" + product);
  };

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2 className="text-center my-4">{cachesName}</h2>
          <div className="row my-4">
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <div className="col-sm-4" key={product._id}>
                    <div className="card product-card">
                      <img src={imageUrl + product.image} alt={product.image} />
                      <div className="card-body" key={product._id}>
                        <h5 className="card-title my-0">
                          {product.productName.length > 17
                            ? product.productName.slice(0, 17) + "..."
                            : product.productName}
                        </h5>
                        <div className="row text-center">
                          <span className="col-lg-6">
                            MRP:
                            <del className="p-1">
                              <span>₹{product.mrp}</span>
                            </del>
                          </span>
                          <span className="col-lg-6">
                            Price:
                            <span className="p-1">₹{product.price}</span>
                          </span>
                        </div>
                        <button
                          className="btn btn-secondary"
                          id={product.productName}
                          onClick={showDescription}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div class="mx-auto ">
                <img
                  src={process.env.PUBLIC_URL + "/images/NoProductFound.jpg"}
                  alt="NoProductFound"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
