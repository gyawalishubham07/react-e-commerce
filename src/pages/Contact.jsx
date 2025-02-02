import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Title from "../components/Title";
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-12 min-h-[80vh]">
      <div className="max-w-screen-xl mx-auto">
        <Title label="Contact Us" />

        <div className="flex items-center mt-8">
          <FaPhoneAlt className="mr-3 text-xl" />
          <a href="tel:9875643210" className="text-teal-700 text-xl">
            9876543210
          </a>
        </div>
        <div className="flex items-center mt-2">
          <FaEnvelope className="mr-3 text-xl" />
          <a href="mailto:myshop@gmail.com" className="text-teal-700 text-xl">
            myshop@gmail.com
          </a>
        </div>
        <div className="flex items-center mt-2">
          <FaMapMarkerAlt className="mr-3 text-xl" />
          <a
            href="https://maps.app.goo.gl/1fDawCbifbuRwsqM9"
            className="text-teal-700 text-xl"
            target="_blank"
          >
            NYC, USA
          </a>
        </div>

        <div className="w-full mt-10">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.4485435818945!2d83.45908110242928!3d27.656271422592184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685f5a35517bb%3A0x1d27a0a47d01df00!2sAviral%20Ankit%20gas%20suppliers!5e0!3m2!1sen!2snp!4v1737819580005!5m2!1sen!2snp"
           height="600"
            allowfullscreen=""
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;