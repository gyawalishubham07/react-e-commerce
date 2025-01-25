import { Link } from "react-router-dom";
import jacket from "../../assets/img/jacket.png";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { deleteProduct } from "../../api/products";
import Modal from "../Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/products/productsAction";
const ProductCard = ({ id, name, brand, category, price, image }) => {
  // const {name,brand,category,price}=props;
  const [isOpen, setIsOpen] = useState(false);

  async function removeProduct() {
    setIsOpen(true);
  }

  const dispatch = useDispatch();

  async function confirmDelete() {
    
   try {
    await deleteProduct(id);

    toast(`Product ${name} delete successfully.`, {
      type: "success",
      autoClose:1500,
    })


    dispatch(getAllProducts({}));
    console.log("Refresh vayo");
   } catch (error) {
    toast(error.response.data, {
      type: "error",
      autoClose:1500,
    })
   } finally{
    setIsOpen(false);
   }
  }


  return (
    <div className="border py-4 px-6 bg-white rounded-xl relative hover:shadow-2xl hover:transition-all hover:ease-in">
      <span className="bg-teal-950 text-xs px-2 py-1 rounded-xl text-white absolute right-4 top-4">
        {category}
      </span>

      <Link
          to={id}>
          <img src={image ?? jacket} className="h-60 w-auto m-auto" />
        </Link>

        <h2 className="text-xl font-semibold">{name}</h2>
      <p>{brand}</p>
      <p className="my-2">
        <span className="text-xl mr-1">${Math.floor(price * 0.8)}</span>
        <span className="line-through text-slate-400 text-sm">${price}</span>
      </p>

      <div className="flex justify-between">
        <Link
          to={id}
          className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900 mt-2 "
        >
          Buy Now
        </Link>

        <div className="flex">
          <Link
            to={`edit/${id}`}
            className="bg-blue-500 px-3 pt-2 ml-2 text-white rounded hover:bg-teal-900 mt-2 "
          >
            <FaPencil />
          </Link>

          <button
            onClick={removeProduct}
            className="bg-red-500 px-3  ml-2 text-white rounded hover:bg-teal-900 mt-2 "
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        label="Delete Product"
        body="Are you sure you want to delete"
        actions={
          <button onClick={confirmDelete}
          className="bg-red-500 text-white px-3 py-1 rounded">
            Confirm
          </button>
        }
      />
    </div>
  );
};
export default ProductCard;
