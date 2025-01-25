import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";

const Carouseltem = ({ label, image }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-20 xl:px-40 ">
      <div className="px-10">
        <h1 className="text-teal-800 font-semibold text-5xl md:text-7xl">
          {label}
        </h1>
        <p className="mt-5 text-gray-900 text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          fugiat quam aperiam veritatis, aliquam perspiciatis aliquid animi eos,
          totam nesciunt maxime! Odio a aspernatur accusamus iusto quod ullam
          placeat ratione?
        </p>
        <div className="my-8">
          <Link
            to={PRODUCT_ROUTE}
            className="bg-teal-950 py-3 px-8 rounded-3xl shadow font-bold text-white hover:text-teal-950 hover:bg-slate-300"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <img src={image} alt="Iphone 16" />
    </div>
  );
};

export default Carouseltem;
