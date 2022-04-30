import CategoryList from "../components/category/categoryList";

import HomeBanner from "../components/homeBanner/homeBanner";


const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeBanner />
      <CategoryList />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
