import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../products/Card";
import Title from "../Title";
import { getProducts } from "../../api/products";

const CategorizedProducts = ({ category }) => {
  //   const { products } = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ limit: 4, filters: { category } })
      .then((response) => {
        setProducts(response.data);
      })
      .catch();
  }, [category]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-8 flex justify-between">
        <Title
          label={category}
          className="border-l-4 border-teal-900 pl-3 capitalize"
        />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} id={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategorizedProducts;
