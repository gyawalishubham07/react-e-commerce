import Title from "../components/Title";

const About = () => {
  return (
    <section className="py-12 min-h-[90vh] bg-teal-100 text-gray-800">
    <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
      <Title label="About Us" />
      
      <h2 className="mt-8 mb-4 text-3xl font-bold text-teal-600">Introduction</h2>
      <p className="text-justify leading-relaxed text-lg">
        Welcome to our premier online marketplace for high-quality electronic products. 
        Our platform is dedicated to providing customers with the latest gadgets, 
        innovative devices, and cutting-edge technology at competitive prices. We strive 
        to bridge the gap between customers and top-notch brands, ensuring a seamless 
        shopping experience with excellent customer support.
      </p>
      
      <h2 className="mt-8 mb-4 text-3xl font-bold text-teal-600">Aims & Objectives</h2>
      <p className="text-lg">
        Our mission is to revolutionize the e-commerce landscape by offering 
        a diverse range of electronic products, including smartphones, laptops, 
        smartwatches, and accessories. We prioritize customer satisfaction, 
        secure transactions, and swift delivery services.
      </p>
      <p className="text-lg mt-4">
        Our objectives include:
      </p>
      <ul className="list-disc pl-6 text-lg space-y-2 text-gray-700">
        <li>Providing top-quality electronic gadgets at affordable prices.</li>
        <li>Ensuring secure and hassle-free online transactions.</li>
        <li>Delivering excellent customer service and support.</li>
        <li>Offering a user-friendly and intuitive shopping experience.</li>
        <li>Keeping customers updated with the latest technology trends.</li>
      </ul>
    </div>
  </section>
  );
};

export default About;