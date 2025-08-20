import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categorys = () => {
  const { categorys } = useSelector((state) => state.home);
  return (
    <section className=" grid 2xs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl 2xl:grid-cols-4    mx-5 mt-4 gap-3   ">
      {categorys.map((c, i) => (
        <div
          className="flex justify-center items-center flex-col gap-2 cursor-pointer"
          key={i}
        >
          <Link to={`/products?category=${c.name}`}>
            <img
              className="w-[130px] h-[130px] rounded-full object-cover"
              src={c.image}
              alt=""
            />
          </Link>
          <div className="flex justify-center items-center">
            <span className="py-[2px] px-6 bg-[#3330305d] text-gray-300">
              {c.name}
            </span>
          </div>
        </div>
      ))}
      {/* <div>
        <Link to="/rock">
          <img
            src={rock}
            alt="rock"
            className="w-[130px] h-[130px] rounded-full object-cover"
          />
        </Link>
      </div>
      <div>
        <img
          src={jazz}
          alt="jazz"
          className="w-[130px] h-[130px] rounded-full object-cover"
        />
      </div>
      <div>
        <img
          src={electronic}
          alt="electronic"
          className="w-[130px] h-[130px] rounded-full object-cover"
        />
      </div>
      <div>
        <img
          src={metal}
          alt="metal"
          className="w-[130px] h-[130px] rounded-full object-cover"
        />
      </div> */}
    </section>
  );
};

export default Categorys;
