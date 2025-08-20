import React, { useEffect } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import Categorys from "../components/Categorys";
import FeatureProducts from "../components/products/FeatureProducts";
import Products from "../components/products/Products";
// import TopRated from "../components/products/TopRated";
// import Latest from "../components/products/Latest";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { get_category, get_products } from "../store/reducers/homeReducer";

const Home = () => {
  const dispatch = useDispatch();
  const {
    categorys,
    products,
    latest_product,
    discount_product,
    topRated_product,
  } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_category());
    dispatch(get_products());
  }, []);
  return (
    <div className="w-full bg-gray-800">
      <Header />
      <Slider />
      <Categorys />
      <div className="py-[45px]">
        <FeatureProducts products={products} />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products title="Discount Music" products={discount_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Top Rated Music" products={topRated_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Latest Music" products={latest_product} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
