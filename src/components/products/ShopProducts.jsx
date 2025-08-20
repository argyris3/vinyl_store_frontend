import React, { useEffect } from "react";
import { FaEuroSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import Ratings from "./Ratings";
import {
  add_to_wishlist,
  add_to_card,
  messageClear,
} from "../../store/reducers/cardReducer";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ShopProducts = ({ styles, products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { errorMessage, successMessage } = useSelector((state) => state.card);

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
    <div
      className={`w-full grid ${
        styles === "grid"
          ? "grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2"
          : "grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2"
      } gap-3`}
    >
      {products.map((disk, i) => (
        <div
          key={i}
          className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${
            styles === "grid"
              ? "flex-col justify-start items-start"
              : "justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start"
          } w-full gap-4 bg-slate-800 p-1 rounded-md`}
        >
          <div
            className={
              styles === "grid"
                ? "w-full relative group h-[210px] md:h-[270px] xs:h-[170px] overflow-hidden"
                : "md-lg:w-full relative group h-[210px] md:h-[270px] overflow-hidden"
            }
          >
            <img
              className="object-cover h-[240px] rounded-md md:h-[270px] xs:h-[170px] w-full"
              src={disk.images[0]}
              alt=""
            />
            <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li
                onClick={() => add_wishlist(disk)}
                className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-gray-500 hover:text-white hover:rotate-[720deg] transition-all"
              >
                <FaHeart />
              </li>
              <Link
                to={`/product/details/${disk.slug}`}
                className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-gray-500 hover:text-white hover:rotate-[720deg] transition-all"
              >
                <FiEye />
              </Link>
              <li
                onClick={() => add_card(disk._id)}
                className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-gray-500 hover:text-white hover:rotate-[720deg] transition-all"
              >
                <FaShoppingCart />
              </li>
            </ul>
          </div>
          <div className=" text-sky-500 px-1">
            <h2 className="capitalize">{disk.name}</h2>
            <span className="flex  items-center">
              <FaEuroSign />
              {disk.price}
            </span>
          </div>
          <div className="flex mb-1 px-1">
            <Ratings ratings={disk.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
