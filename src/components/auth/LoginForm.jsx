import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import { login } from "../../api/auth/login.js";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../constants/routes.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/authAction.js";
import { toast } from "react-toastify";
import Spinning from "../Spinning.jsx";
// import { setUser } from "../../redux/auth/authSlice.js";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState } = useForm(); // register=> get data from user & handleSubmit=> send data taken from user

  // const {name, ref, onChange ,onBlur} = register("email")
  //ref=> take other data of that input element
  //unBlur=> callback function which triggered when the input field loses focus. This is used for validation  any side effects upon leaving the input field.

  const { loading, error } = useSelector((state) => state.auth); //error=> came from console at right top

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const { errors } = formState; // errors => came from form at below input element
  console.log(errors);

  function submitForm(data) {
    dispatch(loginUser(data));
    // login(data).then((response)=>{
    //  console.log(response.data);
    //   dispatch(setUser(response.data));
    //  // login(data);  // data go to api
    //   navigate(HOME_ROUTE);
    // }).catch((error)=> {
    //   console.log(error.response.data);
    //   });
  }

  // used to show if error in top right
  useEffect(() => {
    toast(error, {
      type: "error",
      autoClose: 2000, // 2 sec. in ms
    });
  }, [error]);

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(submitForm)}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          // name={name}
          // ref={ref}
          // onChange={onChange}
          // onBlur={onBlur}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address",
            },
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.email?.message}
        </p>
      </div>
      <div className="mb-5 relative">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password lenght must b greater than 8",
            },
            // pattern:{
            //   value:PASSWORD_REGEX,
            //   message:"Password must contain uppercase, lowercase, numbers & specific characters",
            // }
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.password?.message}
        </p>
        <button
          type="button"
          className="absolute right-3 top-10"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Login {loading ? <Spinning className="h-6 w-6" /> : null}{" "}
      </button>
    </form>
  );
};

export default LoginForm;
