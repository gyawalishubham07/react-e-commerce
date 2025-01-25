import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jacket from "../../assets/img/jacket.png";
import Title from "../../components/Title";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { getProductById } from "../../api/products";
import { PiNumberNine } from "react-icons/pi";
import Spinning from "../../components/Spinning";
import { BiLeftArrowAlt } from "react-icons/bi";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  // console.log(params);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addProductToCart(product));
  }

  useEffect(() => {
    getProductById(params.id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        return console.error(error.response.data);
      });
  }, []);
  if (loading)
    return <div className="flex items-center justify-center h-96">
      <Spinning className='h-16 w-16'/>
    </div>;

  return (
    <section className="py-12">
      <Link to={PRODUCT_ROUTE} className="px-5 py-2 flex items-center ">
       <BiLeftArrowAlt className="mr-1"/> BACK
      </Link>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className=" flex flex-col md:flex-row items-center justify-around">
          <img
            src={product.image ?? jacket}
            alt=""
            className="w-auto max-h-[90vh] md:w-1/2"
          ></img>
          <div className="pl-20 md:w-1/2 ">
            <span className="bg-teal-950 text-xs px-2 py-1 rounded-xl text-white  right-4 top-4">
              {product.category}
            </span>
            <Title label={product.name} />
            <div className="flex text-orange-400 py-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <p className="py-2 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              odit quia numquam quod dolorum aliquid possimus fugit cupiditate
              aperiam excepturi corporis neque ad, pariatur, eaque non earum
              deleniti molestias aliquam? quod dolorum aliquid possimus fugit
              cupiditate aperiam excepturi corporis neque ad, pariatur, eaque
              non earum deleniti molestias aliquam?
            </p>
            <p className="font-semibold">{product.brand}</p>
            <p className="my-2">
              <span className="text-2xl mr-1">
                ${Math.floor(product.price * 0.8)}
              </span>
              <span className="line-through text-slate-400 text-md">
                ${product.price}
              </span>
            </p>
            <button className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900 mt-4 flex items-center" onClick={addToCart}>
              Add to Cart
              <FaCartPlus className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
