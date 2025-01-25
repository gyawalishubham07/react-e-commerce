import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { LOGIN_ROUTE,} from "../../constants/routes";
import logo from "../../assets/img/logo.png";
import logoImg from "../../assets/img/login-img.png";
import loginBg from "../../assets/img/login-design.png";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  // return (
  //   <section className="pt-14">
  //     <img src={loginBg} alt="" className="fixed -z-10 opacity-20 bg-fixed w-full"/>
  //     <div className="max-w-screen-xl mx-auto px-4 h-[70vh]">
  //       <div className="flex flex-col xl:flex-row items-center jsutif-around h-full">
  //         <div className="md:w-1/2 rounded-2xl">
  //           {/* <p className="text-3xl">Welcome to Our</p>
  //       <h1 className="text-7xl text-teal-700"> Shopping Site</h1> */}
  //           <img src={logoImg} alt="" className=" mt-10 w-[53vw] md:w-[43vw] xl:w-[33vw] mx-auto rounded-2xl" />
  //         </div>

  //         <div className=" w-full md:w-1/2 xl:px-20  py-5">
  //           <div className=" max-w-full flex flex-col items-center space-y-4 relative">
  //             <img src={logo} alt="" className=" max-w-[25vh] z-10 pt-[50px]"/>
  //             <div className="  absolute pt-[129px] flex items-center justify-center">
  //               <Title label="Welcome TO Shop" />
  //             </div>
  //             <p className=" text-gray-600 mb-10 pb-[25px]">
  //               Please register your account{" "}
  //             </p>
  //           </div>

  //           <RegisterForm/>
  //           <p className="mt-8 text-center">
  //             Do you already have account?
  //             <Link to={LOGIN_ROUTE} className="text-blue-600 ml-2">
  //               Signin
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );



  return (
    <section className="pt-14">
      <img src={loginBg} alt="" className="fixed -z-10 opacity-20 bg-fixed w-full"/>
      <div className="max-w-screen-xl mx-auto px-4 h-[70vh]">
        <div className="flex flex-col xl:flex-row items-center jsutif-around h-full">

        <div className=" w-full md:w-1/2 xl:px-20  py-5">
            <div className=" max-w-full flex flex-col items-center space-y-4 relative">
              <img src={logo} alt="" className=" max-w-[25vh] z-10 pt-[50px]"/>
              <div className="  absolute pt-[129px] flex items-center justify-center">
                <Title label="Welcome TO Shop" />
              </div>
              <p className=" text-gray-600 mb-10 pb-[25px]">
                Please register your account{" "}
              </p>
            </div>

            <RegisterForm/>
            <p className="mt-3 text-center">
              Do you already have account?
              <Link to={LOGIN_ROUTE} className="text-blue-600 ml-2">
                Signin
              </Link>
            </p>
          </div>

          <div className="md:w-1/2 rounded-2xl">
            {/* <p className="text-3xl">Welcome to Our</p>
        <h1 className="text-7xl text-teal-700"> Shopping Site</h1> */}
            <img src={logoImg} alt="" className=" mt-10 w-[53vw] md:w-[43vw] xl:w-[33vw] mx-auto rounded-2xl" />
          </div>

          
        </div>
      </div>
    </section>
  );



};

export default Register;
