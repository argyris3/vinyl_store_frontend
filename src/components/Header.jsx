import React, { useState, useEffect } from "react";
import logovinyl from "../assets/logo_vinyl.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FaList,
  FaLock,
  FaUser,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import {
  get_card_products,
  get_wishlist_products,
} from "../store/reducers/cardReducer";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state.home);
  const { userInfo } = useSelector((state) => state.auth);
  const { card_product_count, wishlist_count } = useSelector(
    (state) => state.card
  );
  const [category, setCategory] = useState("");
  const search = () => {
    navigate(`/products/search?category=${category}&&value=${searchValue}`);
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(get_card_products(userInfo.id));
      dispatch(get_wishlist_products(userInfo.id));
    }
  }, [userInfo]);

  const [showSidebar, setShowSidebar] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const { pathname } = useLocation();

  const redirect_card_page = () => {
    if (userInfo) {
      navigate("/card");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="w-full ">
      <div className="w-full  bg-gray-800">
        <div className="w-[85%] lg:w-[90%] mx-auto ">
          <div className="flex w-full justify-between items-center h-[65px]">
            <Link className="flex items-center gap-2" to="/">
              <img className="w-11 h-7" src={logovinyl} alt="" />
              <span className="font-bold  lg:text-xl md:hidden xl:text-2xl ">
                Music_Shopify
              </span>
            </Link>

            <div
              className="relative md:w-[100px]
            "
            >
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Search..."
                className="w-full  px-2 py-1 rounded-full focus:outline-none "
              />
              <button
                onClick={search}
                className="absolute right-0 top-1 mr-2 bg-gray-400 text-white rounded-full hover:bg-black "
              >
                <FaCircleArrowRight className="  w-6 h-6 " />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {userInfo ? (
                <Link
                  to="/dashboard"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                >
                  <span>
                    <FaUser />
                  </span>
                  <span>{userInfo.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                >
                  <span>
                    <FaLock />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] lg:w-[90%] mx-auto ">
        <div className="md-lg:w-full w-3/12 md-lg:pt-4">
          <div className="flex justify-between items-center">
            <div
              className="justify-center  items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md:flex  xl:hidden hidden mt-3  "
              onClick={() => setShowSidebar(false)}
            >
              <span>
                <FaList />
              </span>
            </div>
          </div>
        </div>
        <div className="md-lg-xl:w-full w-9/12 flex justify-between items-center gap-10">
          <div className="flex justify-between md-lg:justify-center items-center  pl-8  ">
            <ul className="flex justify-start items-start gap-10  font-semibold tracking-wider capitalize md:hidden text-lg  ">
              <li>
                <Link
                  to="/"
                  className={`py-2 block ${
                    pathname === "/" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shops"
                  className={`p-2 block ${
                    pathname === "/shops" ? "text-white" : "text-slate-500"
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="flex md-lg:hidden justify-center items-center gap-10">
            <div className="flex justify-center gap-10">
              <div
                onClick={() =>
                  navigate(userInfo ? "/dashboard/my-wishlist" : "/login")
                }
                className="relative flex justify-center items-end cursor-pointer w-[25px] h-[25px] rounded-full bg-[#e2e2e2]"
              >
                <span className="text-xl text-slate-500">
                  <FaHeart />
                </span>

                {wishlist_count !== 0 && (
                  <div className="w-[15px] h-[15px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                    {wishlist_count}
                  </div>
                )}
              </div>

              <div
                onClick={redirect_card_page}
                className="relative flex justify-center items-center cursor-pointer w-[25px] h-[25px] rounded-full bg-[#e2e2e2]"
              >
                <span className="text-xl text-slate-500">
                  <FaCartShopping />
                </span>
                {card_product_count !== 0 && (
                  <div className="w-[15px] h-[15px] absolute bg-yellow-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                    {card_product_count}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md-lg:block">
        <div
          onClick={() => setShowSidebar(true)}
          className={`fixed duration-200 transition-all ${
            showSidebar ? "invisible" : "visible"
          } hidden md-lg:block w-screen h-screen bg-slate-700 top-30 left-0 z-20`}
        >
          <div
            className={`w-[220px] z-[9999] transition-all duration-200 fixed ${
              showSidebar ? "-left-[220px]" : "left-0 top-30"
            } overflow-y-auto bg-slate-400  h-screen py-6 px-8`}
          >
            <div className="flex justify-start flex-col gap-6 ">
              <Link className="flex items-center gap-2" to="/">
                <img className="w-7 h-7" src={logovinyl} alt="" />
                <span className="font-bold">Music_Shopify</span>
              </Link>
              {userInfo ? (
                <Link
                  to="/dashboard"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                >
                  <span>
                    <FaUser />
                  </span>
                  <span>{userInfo.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                >
                  <span>
                    <FaLock />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>
            <ul className="flex flex-col justify-center items-start gap-1 text-sm font-bold capitalize pt-4  ">
              <li>
                <Link
                  to="/"
                  className={`py-2 block ${
                    pathname === "/" ? "text-white" : "text-slate-700"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shops"
                  className={`py-2 block ${
                    pathname === "/shops" ? "text-white" : "text-slate-500"
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li></li>
              <li></li>
            </ul>
            {/* <div className="flex justify-start items-center gap-4 text-black">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />{" "}
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />{" "}
              </a>
            </div> */}

            <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center mt-3">
              <div className="w-[28px] h-[28px] rounded-full flex bg-[#f5f5f5] justify-center items-center ">
                <span>
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="flex justify-end items-center flex-col gap-1 ">
                <h2 className="text-sm font-medium text-white">6977282382</h2>
              </div>
            </div>

            <ul className="flex flex-col justify-center mt-2 items-center gap-3 text-[#1c1c1c]">
              <li className="flex justify-start items-center gap-2 text-sm">
                <span>
                  <MdEmail />
                </span>
                <span>argyhaidi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="flex w-full flex-wrap md-lg:gap-8">

        </div>
      </div> */}
    </section>
  );
};

export default Header;
