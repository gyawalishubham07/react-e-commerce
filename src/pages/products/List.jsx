import { useEffect, useState } from "react";
import ProductCard from "../../components/products/Card";
import Title from "../../components/Title";
import products from "../../data.js";
import { getProducts } from "../../api/products.js";
import { Link } from "react-router-dom";
import ProductLoadingCard from "../../components/products/LoadingCard.jsx";
import ProductsLoader from "../../components/products/Loader.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllProducts,
} from "../../redux/products/productsAction.js";
import ProductsFilter from "../../components/products/Filter.jsx";
import { resetQuery } from "../../redux/products/productSlice.js";
const ProductList = () => {
  // const [loading,setLoading]=useState(true);
  // const [productList, setProductList] = useState([]);

  const { loading, products, query } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  function resetFilterQuery() {
    dispatch(resetQuery());
  }



  useEffect(() => {
    dispatch(getAllProducts(query));

    dispatch(getAllCategories());
    // getProducts()
    //   .then((response) => {
    //     setProductList(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     return console.error(error.response.data);
    //   });
  }, [dispatch, query]);
  return (
    <section className="py-12 bg-slate-100 min-h-svh">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Title label="New Arrivals" />
        <div>
        <button onClick={resetFilterQuery} className="shadow px-5 py-2 h-10 mr-2 rounded bg-blue-500 hover:bg-blue-600 text-white ">
            Reset Filters
          </button>
          <Link to="add" className="shadow px-5 py-2 rounded bg-white">
            Add Product +
          </Link>
        </div>
        </div>

        <div className="py-8">
          <ProductsFilter />
          {loading ? (
            <ProductsLoader />
          ) : products.length == 0 ?(
            <h3 className="text-center text-red-500 py-10">Product Not Found !!</h3>
          ):(
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  // name={product.name}
                  // brand={product.name}
                  // category={product.category}
                  // price={product.price}
                  {...product}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
