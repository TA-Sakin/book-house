import React from "react";
import { Link } from "react-router-dom";
// import "./Login.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="row">
      <div className="mx-auto col-md-4 px-5 mt-5">
        <h3 className="text-center my-3">Login</h3>
        <form className="">
          <div className="form-group ">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary rounded-pill w-100 mt-5"
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-outline-dark rounded-pill w-100 mt-3"
          >
            <FaGoogle className="fs-5"></FaGoogle> Login with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
