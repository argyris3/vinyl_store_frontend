import React from "react";
import logovinyl from "../assets/logo_vinyl.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
const Footer = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { card_product_count, wishlist_count } = useSelector(
    (state) => state.card
  );

  return (
    <section className="bg-gray-800">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
        <div className="w-3/12 lg:w-4/12 sm:w-full">
          <div>
            <img className="w-[130px] h-[70px] " src={logovinyl} alt="" />
          </div>
        </div>
        <div className="w-5/12 lg:w-8/12 sm:w-full">
          <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
            <div className="flex justify-between gap-[80px] lg:gap-[40px]">
              <ul className="flex flex-col gap-2 text-slate-900 text-sm font-semibold">
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Payment/Shipping</Link>
                </li>
                <li>
                  <Link>Terms</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2 text-slate-400 text-sm font-medium">
                <li className="tracking-wide">Greece</li>
                <span className="tracking-wide">50200 Ptolemaida</span>
                <span>bigol3@hotmail.com</span>
                <span className="tracking-wide">Phone:6977282382</span>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-4/12 lg:w-full lg:mt-6">
          <div className="w-full flex flex-col justify-start gap-5">
            <h2 className="font-bold text-lg mb-2">Join Our Shop</h2>
            <span>
              Get Email updates about our latest and shop specials offers
            </span>
            <div className="h-[50px] w-full bg-white border relative">
              <input
                className="h-full bg-transparent w-full px-3 outline-0"
                type="text"
                placeholder="Enter your Email.."
              />
              <button className="h-full absolute right-0 bg-slate-600 text-black uppercase px-4 font-semibold ">
                Subscribe
              </button>
            </div>
            {/* <ul className="flex justify-start items-center gap-3">
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#059473] text-white flex justify-center items-center bg-black rounded-full"
                  href=""
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#059473] text-white flex justify-center items-center bg-black rounded-full"
                  href=""
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#059473] text-white flex justify-center items-center bg-black rounded-full"
                  href=""
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#059473] text-white flex justify-center items-center bg-black rounded-full"
                  href=""
                >
                  <FaGithub />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-wrap justify-center items-center text-slate-300 mx-auto py-5 text-center">
        <span className="tracking-wide text-xl">
          Argyrios@2025 All Rights Reserved
        </span>
      </div>
      <div className="hidden fixed md-lg:block w-[30px] h-[60px] bottom-3 right-2 bg-white rounded-full p-4">
        <div className="w-full h-full flex gap-3 flex-col justify-center items-center">
          <div
            onClick={() => navigate(userInfo ? "/card" : "/login")}
            className="relative flex justify-center items-center cursor-pointer w-[20px] h-[20px] rounded-full bg-[#e2e2e2]"
          >
            <span className="text-sm text-black">
              <FaCartShopping />
            </span>
            {card_product_count !== 0 && (
              <div className="w-[13px] h-[13px] absolute bg-slate-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                {card_product_count}
              </div>
            )}
          </div>

          <div
            onClick={() =>
              navigate(userInfo ? "/dashboard/my-wishlist" : "/login")
            }
            className="relative flex justify-center items-center cursor-pointer w-[20px] h-[20px] rounded-full bg-[#e2e2e2]"
          >
            <span className="text-sm text-black">
              <FaHeart />
            </span>
            {wishlist_count !== 0 && (
              <div className="w-[13px] h-[13px] absolute bg-slate-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                {wishlist_count}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
