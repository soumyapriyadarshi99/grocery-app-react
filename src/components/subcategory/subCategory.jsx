import React, { useState, useEffect } from "react";
import axios from "axios";
import { Constants } from "../../constants/constants";
import { useParams, useNavigate } from "react-router-dom";
import getData from "../../utils/util";
// import "./subCategory.css";

const SubCategory = () => {
  const navigate = useNavigate();
  // const { catId } = useParams();
  const { apiUrl } = Constants;
  const [subCategories, setSubCategories] = useState([]);
  const catId = sessionStorage.getItem("categID");
  const [active, setActive] = useState("All");

  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        let response = await getData(apiUrl + "subcategory/" + catId, "get");
        // console.log("subcatedata", response.data.data);
        setSubCategories(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSubCategory();
  }, []);

  const linksHandler = (event) => {
    setActive(event.target.innerText);
    // console.log("wertyuio", event.target.innerText);
    if (event.target.innerText === "All") {
      navigate(`/products/${catId}`);
    } else navigate(`/sub/${event.target.id}`);
  };

  return (
    <>
      <h2 className="my-4 sticky">Sub Categories</h2>
      <ul className="list-group">
        {active === "All" ? (
          <li
            className="list-group-item btn-secondary active "
            onClick={linksHandler}
          >
            All
          </li>
        ) : (
          <li className="list-group-item" onClick={linksHandler}>
            All
          </li>
        )}
        {subCategories.map((subCat) => {
          if (subCat.subName === active)
            return (
              <li
                onClick={linksHandler}
                id={subCat.subId}
                className="list-group-item btn-secondary active "
                key={subCat.subId}
              >
                {subCat.subName}
              </li>
            );
          else
            return (
              <li
                onClick={linksHandler}
                id={subCat.subId}
                className="list-group-item"
                key={subCat.subId}
              >
                {subCat.subName}
              </li>
            );
        })}
      </ul>
    </>
  );
};

export default SubCategory;
