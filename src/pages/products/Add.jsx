import { Link } from "react-router-dom"
import ProductsForm from "../../components/products/Form"
import Title from "../../components/Title"
import { BiLeftArrowAlt } from "react-icons/bi"
import { PRODUCT_ROUTE } from "../../constants/routes"


const AddProduct = () => {
  return (
    <section className="py-5">
      <Link to={PRODUCT_ROUTE} className="px-5 py-2 flex items-center ">
       <BiLeftArrowAlt className="mr-1"/> BACK
      </Link>
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <div className="text-center mb-5">
          <Title label="Add Product"/>
        </div>
      <ProductsForm/>
        </div>
    </section>
  )
}

export default AddProduct