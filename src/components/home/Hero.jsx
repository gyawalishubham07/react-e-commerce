import React from "react";
import { Carousel } from "react-responsive-carousel";
import iphone from "../../assets/iphone.png";
import earpods from "../../assets/earpods.png";
import smartwatch from "../../assets/smartwatch.png";
import Carouseltem from "./Carouseltem";
import Feature from "./Feature";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { BiCreditCard } from "react-icons/bi";
const Hero = () => {
  return (
    <div>
      <Carousel
        className="bg-teal-500"
        autoPlay
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
      >
        <Carouseltem label="Iphone 16 Pro" image={iphone} />
        <Carouseltem label="bOAT Earpods" image={earpods} />
        <Carouseltem label="Apple Watch Ultra 2" image={smartwatch} />
      </Carousel>

      <div className="absolute -bottom-20 left-[16%] z-10 hidden xl:flex justify-center">
        <Feature label="Fast Shipping" icon={<FaShippingFast />} />
        <Feature label="Easy Return" icon={<TbTruckReturn />} />
        <Feature label="Card Payment" icon={<BiCreditCard />} />
      </div>
    </div>
  );
};

export default Hero;
