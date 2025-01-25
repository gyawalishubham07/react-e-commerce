import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Spinning from "../Spinning";
import { addProduct, editProduct } from "../../api/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";

const ProductsForm = ({product}) => {
  const [loading ,setLoading]= useState(false);
  const { register, formState, handleSubmit } = useForm({
    values:product,
  });
  const { errors } = formState;

  const naviagte = useNavigate();
  // console.log(product)
  
  const isEditing = product ? true : false;

  async function submitForm(data) {
    setLoading(true)

    // console.log(data)

    if (!data.image) delete data.image;
  
    try {
    //   console.log(response.data);

       if(isEditing) {
             await editProduct(product._id, data);
       } else {
        await addProduct(data);
       }
      toast(`Product ${isEditing ? "edit" : "add"} successfully.`,{
        type:"success",
        autoClose:1500
      });
      naviagte(PRODUCT_ROUTE);
    } catch (error) {
    //   console.log(error.response.data);
      toast(error.response?.data,{    // if bearer token is not used
        type:"error",
        autoClose:1500
      })
    } finally{
      setLoading(false);
    }
  }

  return (
    <>
      <form
        className="block items-center px-[20rem] w-auto "
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="py-1 ">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 "
            {...register("name", {
              required: "Product Name is required",
            })}
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.name?.message}
          </p>
        </div>
        <div className="py-1 ">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 "
            {...register("brand", {
              required: "Brand is required",
            })}
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.brand?.message}
          </p>
        </div>
        <div className="py-1 ">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 "
            {...register("category", {
              required: "Category is required",
            })}
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.category?.message}
          </p>
        </div>
        <div className="py-1 ">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 "
            {...register("price", {
              required: "Price is required",
              min: {
                value: 0,
                message: "Price must be in positive",
              },
            })}
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.price?.message}
          </p>
        </div>
        <div className="py-1 ">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
           Image URL
          </label>
          <input
            type="url"
            id="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-4/5 p-2.5 "
            {...register("image")}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-teal-700 text-white rounded p-2.5 cursor-pointer mx-auto disabled:opacity-75 disabled:cursor-not-allowed">
          {isEditing ? "Edit Product" : "Add Product"} 
          {loading ? <Spinning className="ml-2" /> : null}
        </button>
      </form>
    </>
  );
};

export default ProductsForm;
