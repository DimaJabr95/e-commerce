import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Hero from "./components/home/hero";
import CategoriesShop from "./components/home/categories-shop/categoriesShop";
import FlashSale from "./components/home/flash-sale/flashSale";
import GetInTouch from "./components/home/get-in-touch/getInTouch";
import Achievements from "./components/home/achievements/achievement";
import Testimonial from "./components/home/testimonial/testimonial";
import Blogs from "./components/home/blogs/blogs";
import FormEmail from "./components/home/form";
import Footer from "./components/home/footer";
import NavbarHeader from "./components/home/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");

  const test = (key, search) => {
    setSearch(search);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={[
            <NavbarHeader test={test} />,
            <Home />,
            <Hero />,
            <CategoriesShop search={search} />,
            <FlashSale />,
            <GetInTouch />,
            <Achievements />,
            <Testimonial />,
            <Blogs />,
            <FormEmail />,
            <Footer />,
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
