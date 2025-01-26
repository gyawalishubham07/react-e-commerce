import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { LOGIN_ROUTE } from "../../constants/routes";
import logo from "../../assets/img/logo.png";
import logoImg from "../../assets/img/login-img.png";
import loginBg from "../../assets/img/login-design.png";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <section className="py-12 min-h-[89vh]">
      <img
        src={loginBg}
        alt=""
        className="fixed -z-10 opacity-20 bg-fixed w-full"
      />
      <div className="max-w-screen-xl mx-auto px-4 h-[70vh]">
        <div className="flex flex-col xl:flex-row items-center jsutif-around h-full">
          <div className=" w-full md:w-1/2 xl:px-20  py-5">
            <div className=" max-w-full flex flex-col items-center space-y-4 relative">
              <img src={logo} alt="" className=" max-w-[20vh] z-10 pt-[55px]" />
              <div className="  absolute pt-[129px] flex items-center justify-center">
                <Title label="Welcome TO Shop" />
              </div>
              <p className=" text-gray-600 mb-10 pb-[25px]">
                Please register your account{" "}
              </p>
            </div>

            <RegisterForm />
            <p className="mt-3 text-center">
              Do you already have account?
              <Link to={LOGIN_ROUTE} className="text-blue-600 ml-2">
                Signin
              </Link>
            </p>
          </div>

          <div className="md:w-1/2 rounded-2xl">
            <img
              src={logoImg}
              alt=""
              className="w-[53vw] md:w-[33vw] xl:w-[30vw] mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

//   return (
//     <section className="py-12 min-h-[90vh]">
//       <img src={loginBg} alt="" className="fixed top-0 left-0 opacity-10 -z-10"/>
//       <div className="max-w-screen-xl mx-auto px-4">
//          <div className="flex flex-col xl:flex-row items-center justify-around min-h-[75vh]">
//           <div className="md:w-1/2 rounded-2xl">
//             {/* <p className="text-3xl">Welcome to Our</p>
//         <h1 className="text-7xl text-teal-700"> Shopping Site</h1> */}
//             <img src={logoImg} alt="" className="w-[53vw] md:w-[33vw] xl:w-[30vw] mx-auto rounded-2xl" />
//           </div>

//            {/* <LoginForm />
//           </div> */}
//           <div className="w-full md:w-1/2 xl:px-20 mt-12">
//             <div className=" max-w-full flex flex-col items-center space-y-4 relative">
//               <img src={logo} alt="" className=" max-w-[25vh] z-10" />
//               <div className="  absolute inset-0 flex items-center justify-center">
//                 <Title label="Welcome Back" />
//               </div>
//               <p className=" text-gray-600 mb-10 pb-14">
//                 Please login to your account{" "}
//               </p>
//             </div>

//             <LoginForm />
//             <p className="mt-8 text-center">
//               Do not have account?
//               <Link to={REGISTER_ROUTE} className="text-blue-600 ml-2">
//                 Signup
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;
