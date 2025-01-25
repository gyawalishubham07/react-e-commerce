import { Link, NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { HOME_ROUTE } from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
import { FaCartShopping } from "react-icons/fa6";
import { BiCartAdd, BiLogOut } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import CartDropdown from "./cart/Dropdown";

const Header = () => {
  const navLinkClass = ({ isActive }) => (isActive ? "text-teal-700" : "");

  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const isAuthenticated = user ? true : false;

  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutUser());
  }

  return (
    <nav className="shadow sticky top-0 bg-white h-20 z-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={HOME_ROUTE} className="w-20">
          <img src={logo} alt="" />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center items-center">
          {/* //Logout     */}
         
          {user ? (
             <div className="flex items-center">
             <div className="relative">
               <button
                 className="mr-5 px-2 py-1"
                 onClick={() => setShowCart(!showCart)}
               >
                 <FiShoppingCart className="text-2xl hover:text-teal-800" />
               </button>
               <CartDropdown showCart={showCart} />
             </div>
            <button
              onClick={logout}
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
            >Logout <BiLogOut className="ml-2" />
            
            </button>
            </div>
          ) : null}

          {/* For  Toggle => in  mobile size web page  */}
          <button
            onClick={() => setIsMobileMenuHidden(!isMobileMenuHidden)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 
            ${isMobileMenuHidden ? "hidden" : ""}`}
        >
          {/* NavBar */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white :bg-gray-800 md::bg-gray-900 :border-gray-700">
            {navMenu
              .filter((menu) => menu.auth === isAuthenticated)
              .map((menu) => (
                <li key={menu.route}>
                  <NavLink to={menu.route} className={navLinkClass}>
                    {menu.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
