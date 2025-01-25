import { useSelector } from "react-redux";
import Hero from "../components/home/Hero";
import CategorizedProducts from "../components/home/CategorizedProducts";
import AllProducts from "../components/home/AllProducts";

const Home = () => {
  return (
   <>
    <section>
      <Hero />  
    </section>
    <section className="py-24">
        <AllProducts/>
      </section>
    <section className="py-24 bg-teal-600">
    <CategorizedProducts category="Earbuds"/>
    </section>
    <section className="py-24">
    <CategorizedProducts category="Smartphone"/>
    </section>
    </>
  );
};

export default Home;
