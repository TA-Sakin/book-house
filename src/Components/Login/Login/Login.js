import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [changeEmailBorderColor, handleEmailBorderColor] = useState(false);
  const [changePassBorderColor, handlePassBorderColor] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="">
      <div className="mx-auto col-sm-6 col-lg-4 px-5 mt-5">
        <h3 className="text-center my-3">Login</h3>
        <form className="">
          <div className="form-group mb-2">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-2">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div>
            <b className="forgotPass">Forgot your password?</b>
          </div>
          <div className="mt-4">
            <p>
              Don't have an account
              <Link to="/signup"> Sign Up</Link>
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary rounded-pill w-100"
          >
            Login
          </button>

          <div className="mt-3 d-flex align-items-center">
            <div
              style={{
                display: "inline",
                width: "50%",
                borderBottom: "1px solid gray",
              }}
            ></div>
            <span className="px-2 pb-1">or</span>
            <div
              style={{
                display: "inline",
                width: "50%",
                borderBottom: "1px solid gray",
              }}
            ></div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-dark rounded-pill w-100 mt-3"
          >
            <FcGoogle className="fs-5 "></FcGoogle> <b>Continue with Google</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
