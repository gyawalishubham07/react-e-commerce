import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setLimit, setSort } from "../../redux/products/productSlice";

const ProductsFilter = () => {

    const {categories, query} = useSelector((state)=> state.products)
    //console.log(products);


  const dispatch = useDispatch();

  function setProductLimit(limit) {
    //console.log(limit);
    dispatch(setLimit(parseInt(limit)));
  }

  function setProductsSort(sort) {
    //console.log(sort);
    dispatch(setSort(sort));
  }

  function filterByName(value) {
    //console.log(value);
    dispatch(setFilters({name : value }));
  }

  function filterByCategory(value) {
   // console.log(value);
    dispatch(setFilters({category : value }));
  }

  // useEffect(() => {
  //   console.log(query)
  // }, [query]);


  return (
    <div className="border bg-white mb-8 px-5 py-3 rounded-md grid items-center md:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-stretch">
      <div className="xl:mx-auto">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" 
        value={query?.filters?.name}
         onChange={(e) => filterByName(e.target.value)}
        className="border ml-2 py-1 px-2" />
      </div>

      <div className="xl:mx-auto">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          value={query?.filters?.category}
          className="border ml-2 py-1 px-2"
          onChange={(e) => filterByCategory(e.target.value)}
        >
             <option value="">Select Category</option>
            {categories.map((category,index)=>(
                 <option key={index} value={category}>{category}</option>
            ))}
       
        </select>
      </div>

      {/* <div className="xl:mx-auto">
        <label htmlFor="category">Category</label>
        <input type="text" id="category" className="border ml-2 py-1 px-2" onChange={(e) => filterByCategory(e.target.value)}/>
      </div> */}

      <div className="xl:mx-auto">
        <label htmlFor="sort">Sort:</label>
        <select
          name="sort"
          id="sort"
          value={query?.sort}
          onChange={(e) => setProductsSort(e.target.value)}
          className="border ml-2 py-1 px-2"
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
        </select>
      </div>

      <div className="xl:mx-auto">
        <label htmlFor="limit">Limit:</label>
        <select
          name="limit"
          id="limit"
          value={query?.limit}
          className="border ml-2 py-1 px-2"
          onChange={(e) => setProductLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
