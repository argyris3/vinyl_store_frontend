import React, { useEffect } from "react";
import { FaEuroSign } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  add_to_card,
  messageClear,
  add_to_wishlist,
} from "../../store/reducers/cardReducer";
import Ratings from "./Ratings";
import { Link, useNavigate } from "react-router-dom";

const FeatureProducts = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { errorMessage, successMessage } = useSelector((state) => state.card);

  const add_card = (id) => {
    if (userInfo) {
      dispatch(
        add_to_card({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const add_wishlist = (pro) => {
    dispatch(
      add_to_wishlist({
        userId: userInfo.id,
        productId: pro._id,
        name: pro.name,
        price: pro.price,
        image: pro.images[0],
        discount: pro.discount,
        rating: pro.rating,
        slug: pro.slug,
      })
    );
  };

  return (
    <section className="w-full">
      <div className="text-center flex justify-center items-center flex-col text-3xl text-slate-300 font-medium relative pb-[45px]">
        <h2>Music You Might Like...</h2>
        <div className="w-[100px] h-[2px] bg-gray-400 mt-4"></div>
      </div>
      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-2">
        {products.map((disc, i) => (
          <div
            key={i}
            className="border group rounded-xl transition-all duration-500 hover:shadow-sm hover:-mt-3"
          >
            <div className="relative overflow-hidden">
              <img
                src={disc.images[0]}
                className="w-full object-cover  h-[190px] sm:h-[170px]  rounded-lg"
                alt=""
              />
              <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                <li
                  onClick={() => add_wishlist(disc)}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-gray-500 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaHeart />
                </li>
                <Link
                  to={`/product/details/${disc.slug}`}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-gray-500 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FiEye />
                </Link>
                <li
                  onClick={() => add_card(disc._id)}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-gray-500 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaShoppingCart />
                </li>
              </ul>

              {disc.discount ? (
                <div className="flex justify-center items-center absolute text-white w[-[28px] h-[28px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  {disc.discount}%
                </div>
              ) : (
                ""
              )}
              <div className="py-2 text-slate-400 px-1">
                <h2 className="capitalize text-lg tracking-wide ">
                  {disc.name}
                </h2>
                <span className="flex  items-center text-indigo-500 ">
                  <FaEuroSign />
                  <span className="text-lg ">{disc.price}</span>
                </span>
              </div>
              <div className="flex mb-1 px-1">
                <Ratings ratings={disc.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
