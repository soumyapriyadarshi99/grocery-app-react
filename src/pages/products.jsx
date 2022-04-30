
import ProductList from "../components/productList/ProductList";
import SubCategory from "../components/subcategory/subCategory";
import { useParams, useNavigate } from "react-router-dom";
import { Constants } from "../constants/constants";


const Products = () => {
  const subCat = useParams("subCat");
  const { apiUrl, imageUrl } = Constants;

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SubCategory />
          </div>
          {/* <div className="col-lg-9">
            <ProductList />
          </div> */}
          <div className="col-lg-9">
            {subCat["subCat"] !== undefined ? (
              <ProductList link={apiUrl + "products/sub/" + subCat["subCat"]} />
            ) : (
              <ProductList />
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Products;
