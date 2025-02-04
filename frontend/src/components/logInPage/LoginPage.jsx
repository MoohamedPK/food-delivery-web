import { useState } from "react";
import {useForm} from "react-hook-form" 
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import registerAction from "../../store/auth/actions/actAuthRegister";
import loginAction from "../../store/auth/actions/actAuthLogin";


const LoginPage = ({ setShowLogin }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("Login");
  const {register, handleSubmit,} = useForm();

  const submitForm = (data) => {
    if (currentState === 'Login') {
      dispatch(loginAction(data))
        .unwrap()
        .then(() => navigate("/"))
        .then(() => setShowLogin(false));
    } else {
      dispatch(registerAction(data))
        .unwrap()
        .then(() => navigate("/"))
        .then(() => setShowLogin(false));
    }
  }


  return (
    <div className="fixed z-50 w-full h-full bg-black/55 flex justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)} className="popup-container w-[450px] bg-white flex flex-col px-8 py-8 gap-3 font-medium animate-fadeIn rounded-xl">
        <div className="title flex justify-between items-center text-2xl">
          <h2 className="">{currentState}</h2>
          <span
            onClick={() => {
              setShowLogin(false), "clicked";
            }}
            className="cursor-pointer"
          >
            X
          </span>
        </div>

        <div className="inputs space-y-5">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="py-3 px-5 my-3 w-full"
              type="text"
              {...register("name")}
              placeholder="Your name"
              required
            />
          )}

          <input
            className="py-3 px-5 my-3 w-full"
            type="email"
            {...register("email")}
            placeholder="Your email"
            required
          />
          <input
            className="py-3 px-5 my-3 w-full"
            type="password"
            {...register("password")}
            placeholder="Your password"
            required
          />
        </div>
        <button className="bg-orange-600 rounded-xl py-2  text-white tracking-wider my-5">
          {currentState === "Login" ? "Login" : "Create account"}
        </button>

        <div className="conditions flex justify-between items-center space-x-3 text-sm text-gray-500">
          <input type="checkbox" name="checkbox" id="" {...register("checkbox")} required/>
          <p>By continuing, i agree the terms of use & privacy policy. </p>
        </div>
        {currentState === "Login" ? (
          <p className="text-center my-3 text-sm">
            Create a new account ?{" "}
            <span
              className="text-orange-600 cursor-pointer"
              onClick={() => {
                setCurrentState("Sign up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-center my-3 text-sm">
            Already have an account ?{" "}
            <span
              className="text-orange-600 cursor-pointer"
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage