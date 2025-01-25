import ProductLoadingCard from "./LoadingCard"


const ProductsLoader = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ProductLoadingCard/>
            <ProductLoadingCard/>
            <ProductLoadingCard/>
            <ProductLoadingCard/>
            <ProductLoadingCard/>
            <ProductLoadingCard/>
            <ProductLoadingCard/>
          </div>
  )
}

export default ProductsLoader