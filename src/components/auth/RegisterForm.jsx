import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import { registered } from "../../api/auth/register";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routes";
import { registerUser } from "../../redux/auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import Spinning from "../Spinning";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm(); // register=> get data from user & handleSubmit=> send data taken from user

  const passwordValue = watch("password");

  // const {name, ref, onChange ,onBlur} = register("email")
  //ref=> take other data of that input element
  //unBlur=> callback function which triggered when the input field loses focus. This is used for validation  any side effects upon leaving the input field.

  const { loading, error } = useSelector((state) => state.auth); //error=> came from console at right top

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const { errors } = formState; // errors => came from form at below input element
  console.log(errors);

  function submitForm(data) {
    dispatch(registerUser(data));
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(submitForm)}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Full Name
        </label>
        <input
          type="text"
          id="name"
          // name={name}
          // ref={ref}
          // onChange={onChange}
          // onBlur={onBlur}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">{errors.name?.message}</p>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div className="mb-5 ">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password lenght must b greater than 8",
            },
            pattern: {
              value: PASSWORD_REGEX,
              message:
                "Password must contain uppercase, lowercase, numbers & specific characters",
            },
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.password?.message}
        </p>
      </div>
      <div className="mb-5 ">
        <label
          htmlFor="confirmpassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="confirmpassword"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("confirmPassword", {
            required: "Password is required",
            validate: (value) =>
              value === passwordValue || "Passwords do not match",
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
          {errors.confirmPassword?.message}
        </p>
      </div>
      <div className="py-4">
        <input
          type="checkbox"
          name="check"
          id="check"
          onClick={() => setShowPassword(!showPassword)}
        />{" "}
        Show Password
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Register {loading ? <Spinning className="h-5 w-5" /> : null}
      </button>
    </form>
  );
};

export default RegisterForm;
