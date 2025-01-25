import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { BiLeftArrowAlt } from "react-icons/bi";
import ProductsForm from "../../components/products/Form";
import Title from "../../components/Title";
import Spinning from "../../components/Spinning";
import { getProductById } from "../../api/products";
import { toast } from "react-toastify";

const EditProduct = () => {
  const params = useParams();
  // console.log(params);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
   // console.log(params.id);
    getProductById(params.id)
      .then((response) => {
        setProduct(response.data);
         console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
        toast(error.response?.data),
          {
            type: "error",
            autoclose: false,
          };
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-5">
      <Link to={PRODUCT_ROUTE} className="px-5 py-2 flex items-center ">
        <BiLeftArrowAlt className="mr-1" /> BACK
      </Link>
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <div className="flex items-center justify-center mb-5">
          <Title label="Edit Product" />
          {loading ? <Spinning className="ml-1" /> : null}
        </div>
        <ProductsForm product={product} />
      </div>
    </section>
  );
};
export default EditProduct;
