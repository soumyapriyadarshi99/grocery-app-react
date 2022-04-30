import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Constants } from "../../constants/constants";
import getData from "../../utils/util";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

import "./category.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { apiUrl, imageUrl } = Constants;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        let response = await getData(apiUrl + "category", "get");
        console.log("catedata", response.data.data);
        setLoading(false);
        setCategories(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, []);

  const explore = (event) => {
    // console.log(event.target.id);
    sessionStorage.setItem("categID", event.target.id);
    sessionStorage.setItem("categName", event.target.name);
    navigate("products/" + event.target.id);
  };
  return (
    <section className="container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2 className="text-center my-4">All Categories</h2>
          <div className="row">
            {categories.map((category) => {
              return (
                <div key={category.catId} className="col-sm-3">
                  <div className="card">
                    <img className="category-list-image"
                      src={imageUrl + category.catImage}
                      alt={category.catImage}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{category.catName}</h5>
                      <button
                        id={category.catId}
                        name={category.catName}
                        onClick={explore}
                        className="btn btn-secondary"
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryList;
