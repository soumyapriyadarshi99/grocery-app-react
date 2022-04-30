import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Products from "./pages/products";
import Contact from "./components/contact/Contact";
import About from "./components/about/about";
import Description from "./components/productDetails/description";
import Register from "./components/register/register";
import Login from "./components/login/login";
import ErrorPage from "./components/error/errorPage";
import Cart from "../src/components/cart/cart";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/index";


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products/:catId" element={<Products />} />
          <Route exact path="/sub/:subCat" element={<Products />} />
          <Route
            exact
            path="/description/:itemName"
            element={<Description />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
        <Route exact path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
